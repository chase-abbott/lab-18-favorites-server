export function formatGifs(array) {
  return array.map(item => {
    return {
      id: item.id,
      url: item.url,
      title: item.title,
      rating: item.rating,
      images: item.images
    };
  }); 
   
  
}