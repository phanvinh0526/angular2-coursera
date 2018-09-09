
// Need to create a js class for Comment obj
import { Comment } from './comment';



export class Dish{
    // Create properties for Object Dish
    id: number;
    name: string;
    image: string;
    category: string;
    label: string;
    price: string;
    featured: boolean;
    description: string;
    comments: Comment[];
}
