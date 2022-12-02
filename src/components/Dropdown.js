import Dropdown from 'react-bootstrap/Dropdown';

function DropDown(props) {
    return (
        <div className="dropdown">
            <Dropdown onSelect={props.selectElementFilterFunction}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter by Element
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" eventKey="All">All</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" eventKey="water">Water</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" eventKey="earth">Earth</Dropdown.Item>
                    <Dropdown.Item href="#/action-4" eventKey="fire">Fire</Dropdown.Item>
                    <Dropdown.Item href="#/action-5" eventKey="metal">Metal</Dropdown.Item>
                    <Dropdown.Item href="#/action-6" eventKey="wood">Wood</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown onSelect={props.selectTypeFilterFunction}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter by Yin/Yang
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" eventKey="All">All</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" eventKey="yin">Yin</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" eventKey="yang">Yang</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown onSelect={props.sort}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Sort By
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" eventKey="Alphabetical">Alphabetical</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" eventKey="place">Placement</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default DropDown;