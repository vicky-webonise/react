import React from 'react';
import axios from 'axios';
import InnerBanner from './common/InnerBanner';
import PageLoader from './common/PageLoader';
import API from '../constants/api-endpoint';

export default class BlogDetail extends React.Component {
  constructor() {
    super();

    this.state = {
      postDetailData: {
        title: 'title dummy'
      },
      isLoading: true
    };
  }

  componentDidMount() {
    this._getPostDetailData();
  }

  _getPostDetailData() {
    let url = API.postId(this.props.match.params.postId)
    axios.get(url)
      .then(response => {
        const postDetailData = response.data;
        this.setState({
          postDetailData,
          isLoading: false
        });
        console.log(postDetailData)
      })

      .catch(error => {
        this.setState({
          postDetailData,
          isLoading: false
        });
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        {this.state.isLoading && <PageLoader />}
        <InnerBanner title={this.state.postDetailData.title} />
        <div className="container py-3">
          <h1>{this.state.postDetailData.title}</h1>
          <p className="lead">Pin a fixed-height footer to the bottom of the viewport in desktop browsers with this custom HTML and CSS. A fixed navbar has been added with <code>padding-top: 60px;</code> on the <code>body &gt; .container</code>.</p>
          <p>{this.state.postDetailData.body}</p>
        </div>
      </div>
    );
  }
}