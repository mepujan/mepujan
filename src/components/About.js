import pujan from '../images/pujan_gautam.jpg';

export const About = () =>{
    return(
        <>
            <section className='container mt-5' id = "#about">
            <h2 className="display-4 mt-5 fw-normal text-white text-center"> About Me</h2>
                <div className="row mt-5">
                    <div className="col-md-8 text-white ">
                        <blockquote className='justify-content'>
                            Passionate software Developer. Self-motivated and always looking to learn something new.<br/><br/>
                            I have completed my bachelor degree in <strong>Computer Science and Information Technology</strong> from Academia
                            International College located in Gwarko, Lalitpur.<br/><br/> I am enrolled in <strong>Computer Software and Database 
                            Development</strong> course offered by Lambton College, Sarnia.<br/><br/>
                            Build projects using different programming language and framework such as JavaScript, Python3,
                            Django, ExpressJS and ReactJS.
                        </blockquote>
                    </div>
                    <div className="col-md-4">
                        <img className='img-fluid' src={pujan} alt="pujan gautam" />
                    </div>
                </div>
            </section>
        </>
    )
}