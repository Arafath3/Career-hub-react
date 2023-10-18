import PropTypes from "prop-types";
const Categories = ({ categories }) => {
  const { logo, category_name, availability } = categories;
  return (
    <div>
      <div className="card card-compact bg-base-100 gap-x-6 p-10">
        <figure>
          <img className="absolute left-24 text-4xl" src={logo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title mt-11 text-base text-[#474747] font-extrabold">
            {category_name}
          </h2>
          <p className="text-base font-medium text-[#A3A3A3]">{availability}</p>
        </div>
      </div>
    </div>
  );
};
Categories.propTypes = {
  categories: PropTypes.object.isRequired,
};

export default Categories;
