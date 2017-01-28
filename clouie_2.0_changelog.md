## Deployed to: clouie_2.0 (Sat Jan 28 01:29:00 2017)

#### Closed PRS:

###### #29 - adds scrolls

###### Changes
 
- Adds scrolling 


###### Closes:
 #27 

###### #28 - more commits

###### Changes
 
- adds map 
- includes lat/lng 


###### Closes:
 #26 

[meta_data]: {"clouie_2.0":{"old_sha":"77f0d9723c28eecf7ae9a2efda92fe39ec96e5f0","commit_sha":"9a3b4c61a687ed7fe1c78e3167951d32ba5a3330"}}

## Deployed to: clouie_2.0 (Sat Jan 28 01:13:30 2017)

#### Closed PRS:

###### #29 - adds scrolls

###### Changes

- Adds scrolling


###### Closes:
 #27

###### #28 - more commits

###### Changes

- adds map
- includes lat/lng


###### Closes:
 #26

###### #25 - Release Notes

###### Changes

- we’re going to tell the tagManager the server_name and tag that was just created (new_tag)
- given the server_name and new_tag the tagManager will find the merged pull requests between the last tag with the server_name and new_tag
- it will parse and create the change log from merged pull requests text
- then updates the release notes on github with the changes that have been made, and the verification data (which allows us to find the server_name in the future)
- Release Note Example: <img width="856" alt="screen shot 2016-11-08 at 10 56 57 pm" src="https://cloud.githubusercontent.com/assets/8782239/20129725/b9a85554-a606-11e6-92f6-a280e6d52ddb.png">


###### Closes:
 #24

[meta_data]: {"clouie_2.0":{"old_sha":"c649b7aa90da3c89b46a264439ee9a7ebfc716ef","commit_sha":"9a3b4c61a687ed7fe1c78e3167951d32ba5a3330"}}
