import 'bootstrap/dist/css/bootstrap.min.css';

export default function About() {
    return (
        <div>
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center">Our Story</h2>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse id volutpat libero.
                    </p>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <h2 className="text-center">Meet the Team</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Team Member" />
                                <div className="card-body">
                                    <h5 className="card-title">John Doe</h5>
                                    <p className="card-text">Co-Founder</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Team Member" />
                                <div className="card-body">
                                    <h5 className="card-title">Jane Smith</h5>
                                    <p className="card-text">Designer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Team Member" />
                                <div className="card-body">
                                    <h5 className="card-title">Alex Johnson</h5>
                                    <p className="card-text">Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
