import dataCategorie from "../../../public/data/categorie";
import Card from "../CardCategories";
function ListRep() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {dataCategorie.map(function (category, index) {
        return <Card key={index} name={category.name} image={category.image} />;
      })}
    </div>
  );
}

export default ListRep;
