import erroricon from './404error.jpeg';

const NotFound = () => {
    return (
    <div>
    <img 
    src={erroricon} 
    alt="Broken file" 
    className="w-full h-full object-contain absolute top-0 left-0 flex items-center justify-center" 
    onError={(e) => e.target.style.display = 'none'} 
/>

</div>
);
}



export default NotFound;