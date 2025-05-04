
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ProductCategoryProps {
  title: string;
  image: string;
  description: string;
  country: string;
  link: string;
}

const ProductCategory = ({ title, image, description, country, link }: ProductCategoryProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-[200px] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
        <div className="absolute top-2 right-2 bg-[#9b87f5] text-white px-3 py-1 rounded-full text-sm">
          {country}
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link to={link}>
          <Button className="w-full bg-[#7E69AB] hover:bg-[#6E59A5]">
            Смотреть модели
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCategory;
