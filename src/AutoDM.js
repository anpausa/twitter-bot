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
   
    if (tweet.user.screen_name == 'markiplier')
    {

             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    
    }
    
    if (tweet.user.screen_name == 'anthonypadilla')
    {

             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    
    }
    
    if (tweet.user.screen_name == 'MarziaPie')
    {

             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    
    }
    
    if (tweet.user.screen_name == 'pewdiepie')
    {

             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    
    }
    
     if (tweet.user.screen_name == 'TwitchShare')
    {

             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    
    }
    
    if (tweet.user.screen_name == 'TwitchRetweetsU')
    {

             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    
    }
    
    
     
    if (tweet.user.screen_name == 'TwitchRetweetr')
    {

             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    
    }
    
       if (tweet.user.screen_name == 'TwitchSharing')
    {

             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    
    }
    
    if (tweet.user.screen_name == 'Retweet_Twitch')
    {

             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              });
    
    }
    
    if (tweet.user.screen_name == 'twitchtvhost')
    {
             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              }); 
    }
    
    if (tweet.user.screen_name == 'SupStreamers')
    {
             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              }); 
    }
    
    if (tweet.user.screen_name == 'StreamerStudio')
    {
             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              }); 
    }
   
    if (tweet.user.screen_name == 'pcgamer')
    {
             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              }); 
    }
    
    if (tweet.user.screen_name == 'share_stream')
    {
             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              }); 
    }
    
     if (tweet.user.screen_name == 'crucefydsreign')
    {
             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              }); 
    }
    
     if (tweet.user.screen_name == 'TwitchKittens')
    {
             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              }); 
    }
    
     if (tweet.user.screen_name == 'StreamerHype')
    {
             T.post('favorites/create', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from HomeTimeline tweet liked!`);
              });

               T.post('statuses/retweet/:id', {
                id: tweet.id_str
              }, (err, data, response) => {
                  console.log(`${data.text} from Home Timeline tweet RT!`);
              }); 
    }
    
    
    
  });
 
  
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
  
    /*T.get('statuses/home_timeline', {
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
    });*/
    
    /*T.post('friendships/create', {
            screen_name: handle
          }, (err, data, response) => {
              console.log(`${screen_name} followed back!`);
          });*/
    
    /*T.get('statuses/user_timeline', {
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
    });*/
    
    
    /*T.get('followers/list', {
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
    });*/
    
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
  const channelName = "https://youtube.com/c/ANPAUS";
  const twitchName = "https://twitch.tv/anpaus";
  //return `Hi ${name} Thanks for .... \n Happy ${dayName} 😊😊 `; // your message
  // My message   
  return `Hey ${name} Thanks for joining my social media network ❤️. \n If you want to check me out on \n Youtube click-> ${channelName} 🔥\n Happy to chat anytime ❤️ \n Happy ${dayName} 🚀🚀🚀 `;
};

module.exports = AutoDM;
