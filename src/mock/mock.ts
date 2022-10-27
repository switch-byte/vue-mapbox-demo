import Mock from 'mockjs'

Mock.mock(RegExp('/api/search/org' + '.*'), 'get', {
  "type":"FeatureCollection",
  "query":[
      "成"
  ],
  "features":[
      {
          "id":"locality.1845809",
          "type":"Feature",
          "place_type":[
              "locality"
          ],
          "relevance":1,
          "properties":{
              "wikidata":"Q30091"
          },
          "text":"中国建筑一局（集团）有限公司河北分公司",
          "place_name":"Chenghua Qu, Chengdu Shi, Sichuan, China",
          "matching_text":"成華区",
          "matching_place_name":"成華区, Chengdu Shi, Sichuan, China",
          "bbox":[
              104.067014,
              30.61897,
              104.23335,
              30.75135
          ],
          "center":[
              104.0994,
              30.66224
          ],
          "geometry":{
              "type":"Point",
              "coordinates":[
                  104.0994,
                  30.66224
              ]
          },
          "context":[
              {
                  "id":"place.313393",
                  "wikidata":"Q30002",
                  "text":"Chengdu Shi"
              },
              {
                  "id":"region.82993",
                  "short_code":"CN-SC",
                  "wikidata":"Q19770",
                  "text":"Sichuan"
              },
              {
                  "id":"country.8753",
                  "short_code":"cn",
                  "wikidata":"Q148",
                  "text":"China"
              }
          ]
      },
      {
          "id":"place.313393",
          "type":"Feature",
          "place_type":[
              "place"
          ],
          "relevance":1,
          "properties":{
              "wikidata":"Q30002"
          },
          "text":"中建城市建设发展有限公司西北分公司",
          "place_name":"Chengdu Shi, Sichuan, China",
          "matching_text":"成都市",
          "matching_place_name":"成都市, Sichuan, China",
          "bbox":[
              102.99797,
              30.092224,
              104.89567,
              31.437529
          ],
          "center":[
              104.06667,
              30.66361
          ],
          "geometry":{
              "type":"Point",
              "coordinates":[
                  104.06667,
                  30.66361
              ]
          },
          "context":[
              {
                  "id":"region.82993",
                  "short_code":"CN-SC",
                  "wikidata":"Q19770",
                  "text":"Sichuan"
              },
              {
                  "id":"country.8753",
                  "short_code":"cn",
                  "wikidata":"Q148",
                  "text":"China"
              }
          ]
      },
      {
          "id":"poi.858993468494",
          "type":"Feature",
          "place_type":[
              "poi"
          ],
          "relevance":1,
          "properties":{
              "foursquare":"52125c798bbdc5f18b06d831",
              "landmark":true,
              "address":"269 Shuncheng Avenue, Qingyang District",
              "category":"hotel, motel, tourism, lodging"
          },
          "text":"中建东方装饰有限公司海外事业部",
          "place_name":"The Ritz-Carlton, 269 Shuncheng Avenue, Qingyang District, Chengdu Shi, Sichuan 610017, China",
          "matching_text":"成都富力丽思卡尔顿酒店",
          "matching_place_name":"成都富力丽思卡尔顿酒店, 269 Shuncheng Avenue, Qingyang District, Chengdu Shi, Sichuan 610017, China",
          "center":[
              104.067618,
              30.666959
          ],
          "geometry":{
              "coordinates":[
                  104.067618,
                  30.666959
              ],
              "type":"Point"
          },
          "context":[
              {
                  "id":"postcode.66702897",
                  "text":"610017"
              },
              {
                  "id":"locality.14060081",
                  "wikidata":"Q614322",
                  "text":"Qingyang Qu"
              },
              {
                  "id":"place.313393",
                  "wikidata":"Q30002",
                  "text":"Chengdu Shi"
              },
              {
                  "id":"region.82993",
                  "short_code":"CN-SC",
                  "wikidata":"Q19770",
                  "text":"Sichuan"
              },
              {
                  "id":"country.8753",
                  "short_code":"cn",
                  "wikidata":"Q148",
                  "text":"China"
              }
          ]
      },
      {
          "id":"poi.51539707310",
          "type":"Feature",
          "place_type":[
              "poi"
          ],
          "relevance":1,
          "properties":{
              "foursquare":"4dcd2349fa7664b7c68668e5",
              "landmark":true,
              "address":"No. 111 Zhihui Street",
              "category":"hotel, motel, tourism, lodging"
          },
          "text":"中建深圳装饰有限公司海外事业部",
          "place_name":"Fraser Suites Chengdu 成都仁恒辉盛阁国际公寓, No. 111 Zhihui Street, Chengdu Shi, Sichuan 610020, China",
          "center":[
              104.065605,
              30.654694
          ],
          "geometry":{
              "coordinates":[
                  104.065605,
                  30.654694
              ],
              "type":"Point"
          },
          "context":[
              {
                  "id":"postcode.66711089",
                  "text":"610020"
              },
              {
                  "id":"locality.8260145",
                  "wikidata":"Q1360027",
                  "text":"Jinjiang Qu"
              },
              {
                  "id":"place.313393",
                  "wikidata":"Q30002",
                  "text":"Chengdu Shi"
              },
              {
                  "id":"region.82993",
                  "short_code":"CN-SC",
                  "wikidata":"Q19770",
                  "text":"Sichuan"
              },
              {
                  "id":"country.8753",
                  "short_code":"cn",
                  "wikidata":"Q148",
                  "text":"China"
              }
          ]
      },
      {
          "id":"poi.1133871374042",
          "type":"Feature",
          "place_type":[
              "poi"
          ],
          "relevance":1,
          "properties":{
              "foursquare":"4b3b92e6f964a520227625e3",
              "landmark":true,
              "address":"31 Zongfu St",
              "category":"hotel, motel, tourism, lodging"
          },
          "text":"Crowne Plaza Chengdu City Center 成都总府皇冠假日酒店",
          "place_name":"Crowne Plaza Chengdu City Center 成都总府皇冠假日酒店, 31 Zongfu St, Chengdu Shi, Sichuan 610020, China",
          "matching_text":"成都总府皇冠假日酒店",
          "matching_place_name":"成都总府皇冠假日酒店, 31 Zongfu St, Chengdu Shi, Sichuan 610020, China",
          "center":[
              104.074632,
              30.661141
          ],
          "geometry":{
              "coordinates":[
                  104.074632,
                  30.661141
              ],
              "type":"Point"
          },
          "context":[
              {
                  "id":"postcode.66711089",
                  "text":"610020"
              },
              {
                  "id":"locality.8260145",
                  "wikidata":"Q1360027",
                  "text":"Jinjiang Qu"
              },
              {
                  "id":"place.313393",
                  "wikidata":"Q30002",
                  "text":"Chengdu Shi"
              },
              {
                  "id":"region.82993",
                  "short_code":"CN-SC",
                  "wikidata":"Q19770",
                  "text":"Sichuan"
              },
              {
                  "id":"country.8753",
                  "short_code":"cn",
                  "wikidata":"Q148",
                  "text":"China"
              }
          ]
      }
  ],
  "attribution":"NOTICE: © 2022 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained. POI(s) provided by Foursquare."
})