import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/sampleSurvey">Sample Survey</NavLink>
        <NavLink to="/sensoryPreferences">Sensory Preferences</NavLink>
        </nav>
    );
}

export default Navigation;