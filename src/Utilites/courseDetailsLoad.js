const courseDetailsLoad = async ({ params }) => {
  const paramsId = await params?.id;
  const res = await fetch("/course.json");
  const datas = await res.json();
  const singleCourse = await datas?.find((data) => data.id == paramsId);

  return singleCourse;
};

export default courseDetailsLoad;
