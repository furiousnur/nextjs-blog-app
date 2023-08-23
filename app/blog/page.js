import 'bootstrap/dist/css/bootstrap.min.css';

export default function Blog() {
    return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center">Latest Blog Posts</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Blog Post" />
                            <div className="card-body">
                                <h5 className="card-title">Blog Post Title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Blog Post" />
                            <div className="card-body">
                                <h5 className="card-title">Blog Post Title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4">
                            <img src="https://via.placeholder.com/300" className="card-img-top" alt="Blog Post" />
                            <div className="card-body">
                                <h5 className="card-title">Blog Post Title</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
