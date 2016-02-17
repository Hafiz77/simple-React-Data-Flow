import Lodash from 'lodash';
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from  './components/video_detail';
import YTSearch from 'youtube-api-search';
const API_KEY='AIzaSyAMxT7MAcBbeseoQkMAvAMX6mJZ4FoL2as';


class App extends Component {
        constructor(props){
          super(props);
          this.state = { videos:[],selectedVideo:null };
          this.videoSearch('adele');
        }

        videoSearch(term){
          //console.log('go--->',test);
          YTSearch({key : API_KEY, term:term}, (videos)=> {
            //console.log('length-->',videos.length);
            this.setState({
              videos:videos,
              selectedVideo:videos[0]
            });
          });
        }
        render(){
          const videoSearch=Lodash.debounce((term)=>{ this.videoSearch(term) },300);
            return (
              <div>
                 <SearchBar onSearchTermChange={videoSearch} />
                 <VideoDetail video={this.state.selectedVideo} />
                 <VideoList
                 onVideoSelect={(selectedVideo)=>this.setState({selectedVideo})}
                 videos={this.state.videos} />
             </div>
          );
    }
  }
ReactDOM.render(<App />,document.querySelector('.container'));
