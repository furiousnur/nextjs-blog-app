import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
    return (
        <div>
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center">Welcome to Our Blog</h2>
                    <p className="text-center">
                        Explore the latest articles and updates on a wide range of topics.
                    </p>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <h2 className="text-center">Featured Articles</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Article" />
                                <div className="card-body">
                                    <h5 className="card-title">Article Title 1</h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Article" />
                                <div className="card-body">
                                    <h5 className="card-title">Article Title 2</h5>
                                    <p className="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img src="https://via.placeholder.com/300" className="card-img-top" alt="Article" />
                                <div className="card-body">
                                    <h5 className="card-title">Article Title 3</h5>
                                    <p className="card-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <a href="#" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center">Join Our Newsletter</h2>
                    <p className="text-center">
                        Stay updated with our latest articles and news by subscribing to our newsletter.
                    </p>
                    <div className="text-center">
                        <input type="email" className="form-control" placeholder="Enter your email" />
                        <button className="btn btn-primary mt-3">Subscribe</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
