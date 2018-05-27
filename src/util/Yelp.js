const apiKey = 'Ch9IBqwU3ICxWkv18uhdIuHB2lu4gyhaCU1u0ztSsGIzM8H3SpvyYbzkNx163iu-s1jLowrjEeTHwUYvayZ4CUD-dvxFI1jdd3SF_DvltFwChrj3bZ4w-xCKGi0KW3Yx'
export const Yelp = {
  search: function(term, location, sortBy) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {headers:
      {Authorization: `Bearer ${apiKey}`}
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories.title,
            rating: business.rating,
            review: business.reviewCount
          }
        })
      }
    }
    );
  }
};
