import App from './components/App';
import Storypage from './components/Storypage';

export default [
    {
        component: App,
        routes: [
            {
                path: '/',
                component: Storypage,
                exact: true
            }
        ]
    }
]
