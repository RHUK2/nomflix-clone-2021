import React from 'react';

import { moviesApi, tvApi } from 'api';
import DetailPresenter from './DetailPresenter';

export default class extends React.Component {
  constructor(props) {
    super(props);
    // 컴포넌트 업데이트 시 생성자부터 호출
    // 그래서 여기서 경로로부터 movie인지 tv인지 확인
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes('/movie/'),
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isMovie } = this.state;
    // Number vs ParseInt
    // :id 에 숫자만 들어올 수 있는 로직
    const parsedId = Number(id);
    if (isNaN(parsedId)) {
      push('/');
    }
    // ?? 뭐지 이게왠
    let result = null;
    try {
      if (isMovie) {
        // let, const 없이 구조 분해 할당 사용방법
        // let, const 없으면 코드블럭으로 해석하기 때문에
        // ()로 감싸주어 표현식으로 해석하게함.
        ({ data: result } = await moviesApi.movieDetail(parsedId));
        // 밑에 방법도 가능하지만 setState가 두 번 호출
        // const { data: result } = await moviesApi.movieDetail(parsedId);
        // this.setState({ result });
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
        // const { data: result } = await tvApi.showDetail(parsedId);
        // this.setState({ result });
      }
    } catch {
      this.setState({
        error: "Can't find anything",
      });
    } finally {
      this.setState({
        loading: false,
        result,
      });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
