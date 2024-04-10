import { Route, Routes } from 'react-router-dom';
import Comment from './components/Comments';
import DefaultLayout from './layout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Noti from './pages/Notifications';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/noti" element={<Noti/>} />
                    <Route
                        path="/comment"
                        element={
                            <>
                                <Comment />
                            </>
                        }
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
