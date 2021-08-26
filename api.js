const { Client, Environment } = require('square');

require('dotenv').config();

const client = new Client({
  environment: Environment.Production,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})

const catalogApi = client.catalogApi;

const getRamen = async (callback) => {
  var menu = {
    items: {},
    images: {}
  }
  var allItems = [];
  var ramen = [];
  var ramenIds = [];
  var imageIds = [];

  try {
    const response = await catalogApi.listCatalog('', 'item');
    allItems = response.result.objects;
    ramen = allItems.filter(item => item.itemData.categoryId === 'RPNT4RTGQ7FM3E4ONMN6ZQLU');

    ramen.forEach(item => {
      ramenIds.push(item.id);
    })

    getCatalogObjects(ramenIds)
      .then(result => {
        result = result.filter(item => item.itemData.name.includes('Ramen') || item.itemData.name.includes('Soba') || item.itemData.name.includes('Noodles'));
        result.forEach(item => {
          imageIds.push(item.imageId, item.itemData.name);
        })
        menu.items = result
      })
      // .then(() => {
      //   getImageLink(imageIds, (result) => {
      //     menu.images = result;
      //   });
      // })
      .then(() => {
        // console.log(menu.images);
        menu = JSON.stringify(menu, (_, v) => typeof v === 'bigint' ? v.toString() : v)
        callback(menu);
      })
      .catch((err) => {
        throw err
      });

    // return menu;
    } catch (error) {
    console.log(error);
  }
}

const getSets = async (callback) => {
  var menu = {
    items: {},
    images: {}
  }
  var allItems = [];
  var sets = [];
  var setsIds = [];
  var imageIds = [];

  try {
    const response = await catalogApi.listCatalog('', 'item');
    allItems = response.result.objects;
    sets = allItems.filter(item => item.itemData.categoryId === 'GNOLBGOZIGYOTNBHFN7HZP3E');

    sets.forEach(item => {
      setsIds.push(item.id);
    })

    getCatalogObjects(setsIds)
    .then ((result) => {
      result = result.filter(item => item.itemData.name.includes('Set'))
      result.forEach(item => {
        imageIds.push(item.imageId, item.itemData.name);
      })
      menu.items = result;
    })
    // .then(() => {
    //   getImageLink(imageIds, (result) => {
    //     menu.images = result;
    //   });
    // })
    .then(() => {
      menu = JSON.stringify(menu, (_, v) => typeof v === 'bigint' ? v.toString() : v)
      callback(menu);
    })
    .catch((err) => {
      throw err
    });

    } catch (error) {
    console.log(error);
  }
}

const getDrinks = async (callback) => {
  var menu = {
    items: {},
    images: {}
  }
  var allItems = [];
  var drinks = [];
  var drinksIds = [];
  var imageIds = [];

  try {
    const response = await catalogApi.listCatalog('', 'item');
    allItems = response.result.objects;
    drinks = allItems.filter(item => item.itemData.categoryId === 'G275C2FV4MRFNRWNCLJWC3Y4');

    drinks.forEach(item => {
      drinksIds.push(item.id);
    })

    getCatalogObjects(drinksIds)
    .then ((result) => {
      result.forEach(item => {
        if (item.imageId) {
        imageIds.push(item.imageId, item.itemData.name);
        }
      })
      menu.items = result;
    })
    // .then(() => {
    //   getImageLink(imageIds, (result) => {
    //     menu.images = result;
    //   });
    // })
    .then(() => {
      menu = JSON.stringify(menu, (_, v) => typeof v === 'bigint' ? v.toString() : v)
      callback(menu);
    })
    .catch((err) => {
      throw err
    });

    } catch (error) {
    console.log(error);
  }
}

const getSpecials = async (callback) => {
  var menu = {
    items: {},
    images: {}
  }

  var allItems = [];
  var specials = [];
  var specialsIds = [];
  var imageIds = [];

  try {
    const response = await catalogApi.listCatalog('', 'item');
    allItems = response.result.objects;
    specials = allItems.filter(item => item.itemData.categoryId === 'JUDRXKDAOXSDQZ47I7LOTZVA');

    specials.forEach(item => {
      specialsIds.push(item.id);
    })

    getCatalogObjects(specialsIds)
    .then ((result) => {
      result = result.filter(item => item.itemData.name.includes('Special'))
      result.forEach(item => {
        imageIds.push(item.imageId, item.itemData.name);
      })
      menu.items = result;
    })
    // .then(() => {
    //   getImageLink(imageIds, (result) => {
    //     menu.images = result;
    //   });
    // })
    .then(() => {
      menu = JSON.stringify(menu, (_, v) => typeof v === 'bigint' ? v.toString() : v)
      callback(menu);
    })
    .catch((err) => {
      throw err
    });

    } catch (error) {
    console.log(error);
  }
}

const getCatalogObjects = async (ids) => {
  try {
    const response = await catalogApi.batchRetrieveCatalogObjects({
      objectIds: ids
    });
    var result = response.result.objects;
    return result;
  } catch (error) {
    console.log(error);
  }
}

// const getImageLink = async (ids, callback) => {
//   var output = {}
//   var names = ids.filter((index, i) => i % 2 !== 0);
//   ids = ids.filter((index, i) => i % 2 === 0);
//   await ids.forEach(async (id, i) => {
//     try {
//       const response = await catalogApi.retrieveCatalogObject(id);
//       var result = response.result.object.imageData.url;
//       output[names[i]] = result;
//       // console.log(output);
//       callback(output);
//     } catch (error) {
//       console.log('error');
//     }
//   })
//   return output;
// }

module.exports = { getRamen, getSets, getDrinks, getSpecials }