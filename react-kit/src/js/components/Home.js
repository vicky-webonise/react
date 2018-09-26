import React from 'react';
import axios from 'axios';
import Banner from '../components/common/Banner';
import PageLoader from './common/PageLoader';
import API from '../constants/api-endpoint';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            postData: [],
            isLoading: true
        };
        this._getPostData = this._getPostData.bind(this);
    }

    componentDidMount() {
        this._getPostData();
    }

    _getPostData () {
      let url = API.post;
      axios.get(url)
      .then(response => {
          const postData = response.data;
          this.setState({
              postData,
              isLoading: false
          });
          console.log(postData.length)
          console.log(postData.length)
      })

      .catch(error => {
          this.setState({
              postData: [],
              isLoading: false
          });
          console.log(error);
      })
    }

    _goToBlogDetailPage(post) {
        location.hash = `/blog/${post.id}`
    }

    render() {
      let maxLimitonHomePage = 10;
        return (
            <div>
                <Banner />
                <div className="container py-3">
                    <h1>Home page</h1>
                    <p className="h6">Blog sub heading</p>
                    {this.state.isLoading && <PageLoader />}
                    <div className="row">
                        {
                            this.state.postData.slice(0, maxLimitonHomePage).map(post => {
                                return <div className="col-md-4" key={post.id}>
                                <div className="card mb-4 shadow-sm">
                                    <img className="card-img-top" src="https://via.placeholder.com/350x150"  />
                                    <div className="card-body">
                                        <p className="card-text">{post.title}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" onClick={this._goToBlogDetailPage.bind(this, post)} className="btn btn-sm btn-outline-secondary">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                            </div>
                                            <small className="text-muted">By {post.userId}</small>
                                        </div>
                                    </div>
                                </div>
                                {console.log(post.userId)}
                            </div>
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}