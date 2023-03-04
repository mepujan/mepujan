import { Card, Button } from "react-bootstrap";
import project1 from '../images/project_1.png';

export const Projects = () => {
    return (
        <>
            <section className="p-3 text-center">
                <h2 className="display-4 fw-normal text-white text-center mt-5">Projects</h2>
                <div className="row d-flex d-flex justify-content-evenly mt-3">
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={project1} />
                        <Card.Body>
                            <Card.Title>Surgery Scheduling App</Card.Title>
                            <Card.Text>
                                Surgery Scheduling Web Application with Google Calendar Integration.
                            </Card.Text>
                            <Button href="https://github.com/mepujan/Time_Doctor_fe" rel="noreferrer" target="_blank" variant="primary">More Info</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={project1} />
                        <Card.Body>
                            <Card.Title>Driving Instructor Scheduling Web App</Card.Title>
                            <Card.Text>
                                Used ExpressJs for the api and ReactJs for the frontend.
                            </Card.Text>
                            <Button href="https://github.com/mepujan/apexDriving" rel="noreferrer" target="_blank" variant="primary">More Info</Button>
                        </Card.Body>
                    </Card>
                </div>

                <div class="col-md-5 p-lg-5 mx-auto my-5">
                    <a class="btn btn-outline-info" rel="noreferrer" target="_blank" href="https://github.com/mepujan?tab=repositories">See All Repositories</a>
                </div>

            </section>

        </>
    )
}