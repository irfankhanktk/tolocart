const props = {
  id: "1",
  name: "Ali",
};
const { name, id } = props;
console.log("props::", props?.id);
console.log("props::", props?.name);
console.log("props ext::", id);
console.log("props ", name);
console.log("props ext by name::", props["id"]);
console.log("props ext name::", props["name"]);
