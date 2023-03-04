import { Card } from "react-bootstrap";

export const Services = () => {
    const skills = [

        {
            "imgUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNsWNdN8bimV8v3tDEkHhNzIyJMAEMhNZDaw&usqp=CAU"
        
        }  ,  
        {
            "imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        },
        {
            "imgUrl":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
        },
        {
            "imgUrl":"https://g.foolcdn.com/art/companylogos/square/mdb.png"
        },
        {
            "imgUrl":"https://developers.redhat.com/sites/default/files/styles/article_feature/public/blog/2014/05/homepage-docker-logo.png?itok=zx0e-vcP"
        }
    ]

    return (
        <>
            <section className="p-3 p-md-5 m-md-3 text-center">
                <h2 className="display-4 fw-normal text-white text-center mt-5"> Skills</h2>
                <div className="row d-flex justify-content-evenly">
                {skills.map(skill =>(
                    <Card style={{ width: '10rem', margin:15,border:2}} key={skill}>
                    <Card.Img variant="top" className="img-fluid" src={skill.imgUrl} />
                </Card>
                ))}
                </div>
                
            </section>

        </>
    )
}