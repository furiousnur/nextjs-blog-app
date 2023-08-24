export default async function getSingleBlog(id){
    const res = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`);
    if (!res.ok){
        throw new Error("Error Fetching post");
    }

    return res.json();
}