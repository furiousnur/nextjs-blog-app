import getSingleBlog from "@/lib/singleBlog";

export default async function SingleBlog({ params }) {
    const id = params.id;
    const post = await getSingleBlog(id);

    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <img src={post.img} className="img-fluid mb-3" alt="Blog Post" />
                        <h1 className="mb-3">{post.title}</h1>
                        <p>{post.content}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}