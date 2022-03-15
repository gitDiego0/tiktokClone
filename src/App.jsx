import './App.css'
import FeedVideos from './components/FeedVideos'
import Upload from './pages/Upload/index'
import { Route } from 'wouter'

function App() {
  return (
    <div className="App">
      <main>
        <Route path="/">
          <FeedVideos />
        </Route>
        <Route path="/upload">
          <Upload />
        </Route>
      </main>
    </div>
  )
}

export default App
