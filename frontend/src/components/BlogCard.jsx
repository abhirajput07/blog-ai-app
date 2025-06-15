import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  if (!blog) return null;
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();
  return (
    <>
      <div
        onClick={() => navigate(`/blog/${_id}`)}
        className="w-full overflow-hidden rounded-lg shadow hover:shadow-primary/25 duration-300 cursor-pointer hover:scale-102"
      >
        <img src={image} alt="" className="aspect-video" />
        <span className="px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs ml-5 mt-4">
          {category}
        </span>
        <div className="p-5">
          <h5 className="mb-2 font-medium text-gray-900">{title}</h5>
          <p
            className="mb-3 text-xs text-gray-600"
            dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
