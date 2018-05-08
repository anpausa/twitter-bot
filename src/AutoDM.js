const T = require("./Twit.js");
const my_user_name = require("../config").userName;
const timeout = 1000 * 60 * 5; // timeout to send the message 5 min
const timeout2 = 1000 * 5;
const timeout3 = 1000 * 15;

const AutoDM = () => {
  //const stream = T.stream('statuses/sample');
  const stream = T.stream("user");
  console.log("Start Sending Auto Direct Message 🚀🚀🚀" + my_user_name);
  stream.on("follow", SendMessage);
  
  stream.on('tweet', function (tweet) {
   if (tweet.user.screen_name == my_user_name)
    {
     
      T.get('statuses/home_timeline', {
      count: 3
      }, (err, data, response) => {
          //console.log(data);
        data.forEach(t => {
            //console.log(t.text);
            //console.log(t.user.screen_name);
           // console.log(t.id_str);
            //console.log('\n');
             T.post('favorites/create', {
                id: t.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: t.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
          });
      });
      
      /* T.get('followers/list', {
      screen_name: 'JustDannYT',
      count: 5
      }, (err, data, response) => {
        data.users.forEach(t => {          
          T.post('friendships/create', {
            id: t.id_str
          }, (err, data, response) => {
              console.log(`${t.screen_name} followed from MY Tweet from jDT!: ${t.following}`);
          });
          
        });
      //console.log(data);
      });
      
      setTimeout(() => {
        T.get('followers/list', {
        screen_name: 'starshine1games',
        count: 5
        }, (err, data, response) => {
          data.users.forEach(t => {
            T.post('friendships/create', {
              id: t.id_str
            }, (err, data, response) => {
                console.log(`${t.screen_name} followed from MY Tweet from S1G!`);
            });
          });
        });
      }, timeout2);
      
      setTimeout(() => {
        T.get('users/suggestions/:slug', { slug: 'gaming',
        count: 5
        }, (err, data, response) => {
          data.users.forEach(t => {
            T.post('friendships/create', {
              id: t.id_str
            }, (err, data, response) => {
                console.log(`${t.screen_name} followed from MY Tweet from SLUG!`);
            });
          });
        });
      }, timeout3);*/
    }
    
    if (tweet.user.screen_name == 'MarketWatch')
    {
     
      T.get('statuses/home_timeline', {
      count: 3
      }, (err, data, response) => {
          //console.log(data);
        data.forEach(t => {
            //console.log(t.text);
            //console.log(t.user.screen_name);
           // console.log(t.id_str);
            //console.log('\n');
             T.post('favorites/create', {
                id: t.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: t.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
          });
      });
      
      /* T.get('followers/list', {
      screen_name: 'JustDannYT',
      count: 5
      }, (err, data, response) => {
        data.users.forEach(t => {          
          T.post('friendships/create', {
            id: t.id_str
          }, (err, data, response) => {
              console.log(`${t.screen_name} followed from MY Tweet from jDT!: ${t.following}`);
          });
          
        });
      //console.log(data);
      });
      
      setTimeout(() => {
        T.get('followers/list', {
        screen_name: 'starshine1games',
        count: 5
        }, (err, data, response) => {
          data.users.forEach(t => {
            T.post('friendships/create', {
              id: t.id_str
            }, (err, data, response) => {
                console.log(`${t.screen_name} followed from MY Tweet from S1G!`);
            });
          });
        });
      }, timeout2);
      
      setTimeout(() => {
        T.get('users/suggestions/:slug', { slug: 'gaming',
        count: 5
        }, (err, data, response) => {
          data.users.forEach(t => {
            T.post('friendships/create', {
              id: t.id_str
            }, (err, data, response) => {
                console.log(`${t.screen_name} followed from MY Tweet from SLUG!`);
            });
          });
        });
      }, timeout3);
    }*/
    
  });
 
  //stream.on('tweet', function (tweet) {
  //console.log(tweet);
  //});
  
  //stream.on('disconnect', function (disconn) {
  //console.log('disconnect')
 // });
  
 // stream.on('error', function (tweet) {
  //console.log(tweet);
 // });

 // stream.on('limitation', function (tweet) {
 // console.log(tweet);
 // });
  
  
//stream.on('connect', function (conn) {
//  console.log('connecting')
//});

//stream.on('reconnect', function (reconn, res, interval) {
//  console.log('reconnecting. statusCode:', res.statusCode)
//});
  
  



};

const SendMessage = user => {
  const { screen_name, name } = user.source;
  
  const obj = {
    screen_name,
    text: GenerateMessage(name)
  };
  //console.log(" 🎉🎉🎉🎉 New Event  🎉🎉🎉🎉🎉 " + screen_name);
 
  
  
  //T.get('friends/list', {
  //screen_name: my_user_name,
 // count:2
  //}, (err, data, response) => {
   //   data.users.forEach(user => {
   //     console.log(user.screen_name);
        //     T.get('friendships/lookup', {
    //    screen_name: user.screen_name
    //    },(err, data, response) => {
    //          console.log(data);
    //     });
  //  })
  //});
 
  
  // the follow stream track if I follow author person too.
  if (screen_name != my_user_name) {
    console.log(" 🎉🎉🎉🎉 New Follower  🎉🎉🎉🎉🎉 ");
    const handle = screen_name;
  
  /* T.get('followers/list', {
      screen_name: 'JustDannYT',
      count: 5
      }, (err, data, response) => {
        data.users.forEach(t => {
          T.post('friendships/create', {
            id: t.id_str
          }, (err, data, response) => {
              console.log(`${t.screen_name} followed from jDT!`);
          });
        });
      //console.log(data);
    });*/
     //const handle = screen_name;
  
    T.get('statuses/home_timeline', {
    count: 1
    }, (err, data, response) => {
        //console.log(data);
      data.forEach(t => {
          //console.log(t.text);
          //console.log(t.user.screen_name);
         // console.log(t.id_str);
          //console.log('\n');
           T.post('favorites/create', {
              id: t.id_str
            }, (err, data, response) => {
                console.log(`${data.text} from HomeTimeline tweet liked!`);
            });

             T.post('statuses/retweet/:id', {
              id: t.id_str
            }, (err, data, response) => {
                console.log(`${data.text} from Home Timeline tweet RT!`);
            });
        });
    });
    
    T.post('friendships/create', {
            screen_name: handle
          }, (err, data, response) => {
              console.log(`${screen_name} followed back!`);
          });
    
    T.get('statuses/user_timeline', {
    screen_name: handle,
      count: 1
    }, (err, data, response) => {
       data.forEach(t => {
        //console.log(t.text);
        //console.log(t.user.screen_name);
       // console.log(t.id_str);
        //console.log('\n');
         T.post('favorites/create', {
            id: t.id_str
          }, (err, data, response) => {
              console.log(`${data.text} tweet liked!`);
          });
         
           T.post('statuses/retweet/:id', {
            id: t.id_str
          }, (err, data, response) => {
              console.log(`${data.text} tweet RT!`);
          });
      });
    });
    
    
    T.get('followers/list', {
      screen_name: handle,
      count: 5
      }, (err, data, response) => {
        data.users.forEach(t => {
          T.post('friendships/create', {
            id: t.id_str
          }, (err, data, response) => {
              console.log(`${t.screen_name} followed from New Follower!`);
          });
        });
      //console.log(data);
    });
    
    setTimeout(() => {
      T.post("direct_messages/new", obj)
        .catch(err => {
          console.error("error", err.stack);
        })
        .then(result => {
          console.log(`Message sent successfully To  ${screen_name}  💪💪`);
        });
    }, timeout);
  }
};
const GenerateMessage = name => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const d = new Date();
  const dayName = days[d.getDay()];
  const channelName = "https://parttimedime.com";
  //return `Hi ${name} Thanks for .... \n Happy ${dayName} 😊😊 `; // your message
  // My message   
  return `Hi ${name} Thanks for being a part of my social media network. \n If you want to check out my blog click-> ${channelName} \n Happy to discuss anytime 😊  \n Happy ${dayName} 😊😊 `;
};

module.exports = AutoDM;
