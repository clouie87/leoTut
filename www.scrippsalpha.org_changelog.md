## Deployed to: www.scrippsalpha.org (Mon Nov 26 2018 at 11:19:25)

#### Closed PRS:

###### #9602 - Sparkle 9593 appointment list

###### Changes
 

- Creates list view that operates with similar functionality to the calendar in selecting dates 

- creates a toggle navigation 

- reorganizes files for easier understanding 

- Screenshots and features here are WIP please see comments for latest updates ![screen shot 2018-11-16 at 4 55 11 pm](https://user-images.githubusercontent.com/2073148/48649524-de74f680-e9c0-11e8-8448-97761919cdf9.png) ![screen shot 2018-11-16 at 4 55 07 pm](https://user-images.githubusercontent.com/2073148/48649525-de74f680-e9c0-11e8-8bd6-244bd62f39cc.png) 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9593 

###### #9622 - Uglify inline js

###### Changes
 

- Reduce the amount of inline JS we sent to the client 


###### Closes:
 Unreported 

###### #9587 - 1485 improve form numbering

###### Changes
 

- Unique duplicate form fields 

- improves the naming convention of form fields. When there are duplicate labels add a `( 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1485 

###### #9608 - Fix Expandable Components margins

###### Changes
 

- updates the expandable component margins to use the ACO solution. 

- Remove the extra wysiwyg bottom margin, this increases the margins when we are telling the user that we will remove it. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1469 

###### #9617 - Change preset templates

###### Changes
 

- Changes FB and Newsletter presets 


###### Closes:
 combinaut/sparkle-scripps#1488 

###### #9615 - Fix Sources targeting non-vanity paths

###### Changes
 

- Fix campaign shortcut urls not redirecting to the vanity path 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1500 

###### #9611 - Allow concurrent_slots to remain unset

###### Changes
 Marc wants the ability to not set a limit on the number of concurrent appointments. 


###### Closes:
 Related to https://github.com/combinaut/sparkle-compassus/issues/482 

###### #9609 - Set the image height to be auto

###### Changes
 

- giving hero-banners images should have a height of auto, otherwise pagespeed sets the natural height of the image causing it to be very tall/ messing up the aspect ratio. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1492 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"c46592082f61014","commit_sha":"74f46fc2d589434a9c068148125ab6fb8baf884c"}}

## Deployed to: www.scrippsalpha.org (Wed Nov 21 20:13:01 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"595a40b5a804ae39bc7cc0ee596b93051e3aec16","commit_sha":"595a40b5a804ae39bc7cc0ee596b93051e3aec16"}}

## Deployed to: www.scrippsalpha.org (Wed Nov 21 19:36:57 2018)

#### Closed PRS:

###### #9617 - Change preset templates

###### Changes
 
- Changes FB and Newsletter presets 


###### Closes:
 combinaut/sparkle-scripps#1488 

###### #9615 - Fix Sources targeting non-vanity paths

###### Changes
 
- Fix campaign shortcut urls not redirecting to the vanity path 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1500 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"90df7fc01d3a8c11040aa80e8ec428b883de1f50","commit_sha":"0b2fffbca491c7c51300c6b714f8005b6ba19525"}}

## Deployed to: www.scrippsalpha.org (Wed Nov 21 15:34:40 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"f31978f7564d957fb320c3f5ca32f1e017c71ce0","commit_sha":"27895b8cc13d9e4708b39979477c060190840749"}}

## Deployed to: www.scrippsalpha.org (Wed Nov 21 03:15:44 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"f31978f7564d957fb320c3f5ca32f1e017c71ce0","commit_sha":"f660be865c39bed9336b8c76c70dd9071e23c883"}}

## Deployed to: www.scrippsalpha.org (Wed Nov 21 02:39:51 2018)

#### Closed PRS:

###### #9611 - Allow concurrent_slots to remain unset

###### Changes
 Marc wants the ability to not set a limit on the number of concurrent appointments. 


###### Closes:
 Related to https://github.com/combinaut/sparkle-compassus/issues/482 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"0895f3f829863ac50c1ba2ad8106d2b31fec4235","commit_sha":"b6ccbfadfdb082bd8d11926652463469b4ecfcf4"}}

## Deployed to: www.scrippsalpha.org (Tue Nov 20 21:13:33 2018)

#### Closed PRS:

###### #9609 - Set the image height to be auto

###### Changes
 
- giving hero-banners images should have a height of auto, otherwise pagespeed sets the natural height of the image causing it to be very tall/ messing up the aspect ratio. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1492 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"c46592082f61014daaa62cd0b07d341c841870e7","commit_sha":"efd6d35b45b721ee4929a892571aa5b97c8c0c41"}}

## Deployed to: www.scrippsalpha.org (Tue Nov 20 18:47:17 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"5a6907efdcb02fee58be9ef83553878e51b89bda","commit_sha":"699c5332cf0f3392fc5d2f791ee3297512525d4e"}}

## Deployed to: www.scrippsalpha.org (Tue Nov 20 18:36:19 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"5a6907efdcb02fee58be9ef83553878e51b89bda","commit_sha":"e91155708026a2ed09b8aacfcf943525363d4278"}}

## Deployed to: www.scrippsalpha.org (Tue Nov 20 18:00:00 2018)

#### Closed PRS:

###### #9605 - Allow multiple time ranges per-day

###### Changes
 Allow multiple time ranges per-day and do better validation of times to avoid errors in browsers that don't support `<input type="time">` (Only desktop Safari). ![image](https://user-images.githubusercontent.com/7904/48666060-65d96d00-ea88-11e8-8ebb-ea69f2bd5b3d.png) 


###### Closes:
 Closes #9604. 

###### #9607 - Set a max length on Compassus salesforce phone field

###### Changes
 
- Prevent Form submissions with non-phone number content in the phone number field from preventing submission to salesforce 


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/481 

###### #9603 - Fixed vertical alignment of flash messages

###### Changes
 
- Fixed vertical alignment of flash messages ![image](https://user-images.githubusercontent.com/87623/48651459-e1b3b680-e9af-11e8-8caf-a14a5ceeb0d2.png) ![image](https://user-images.githubusercontent.com/87623/48651467-e8dac480-e9af-11e8-835f-6be16f019bcd.png) 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9502 

###### #9600 - Stop redirecting to answers.json on login

###### Changes
 
- This change prevents previous behaviour where the Help TOC manager would run a get request on instantiation. Now with this change the get request is fired only when the help modal is opened, preventing the behaviour we have currently with login. ![screen shot 2018-11-16 at 3 02 16 pm](https://user-images.githubusercontent.com/2073148/48644485-b8475a80-e9b0-11e8-998c-028b6a85bb1d.png) 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9598 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"b65405158491f0e2a6af2b2a1b55c136a3de6727","commit_sha":"27d6e74e9de206d065466dbc077830e3fcf6ea2f"}}

## Deployed to: www.scrippsalpha.org (Fri Nov 16 18:18:08 2018)

#### Closed PRS:

###### #9599 - Event Registration Tweaks

###### Changes
 * Imported events should expire after completion * Redirect from schedule to the first event * Import meta title and description 


###### Closes:
 combinaut/sparkle-scripps#1494, combinaut/sparkle-scripps#1147, https://github.com/combinaut/sparkle-scripps/issues/1476 

###### #9597 - Optimize loading of International Telephone Input JS

###### Changes
 
- Optimize loading of International Telephone Input JS 


###### Closes:
 Unreported 

###### #9596 - Upgrade to latest version of moment.js

###### Changes
 
- Upgraded to latest moment to avoid known vulnerabilities in previous version 2.10.2 


###### Closes:
 Unreported 

###### #9591 - Adds Sitewide Search Autocomplete to Giving

###### Changes
 
- Adds Sitewide Search Autocomplete to Giving 


###### Closes:
 Fixes https://github.com/combinaut/sparkle-scripps/issues/1491 

###### #9592 - Fixes appointment widget January problem

###### Changes
 
- The previous implementation caused a problem where the days that were saved to the `this.calendar` variable being saved as if the current year was whatever the year is for the user right now. When you changed to January of the next year the weeks generated would be the weeks for the start of the current year. 
- This fix provides the loop with the current Moment object that is being iterated over. ![screen shot 2018-11-15 at 4 34 00 pm](https://user-images.githubusercontent.com/2073148/48583366-ed8e7280-e8f4-11e8-9ab4-0743d58d6af2.png) 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9590 

###### #9595 - Update Hours Tab

###### Changes
 
- Show Hours in separate tab even when there is only one hour. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1465 

###### #9594 - Font-display to allow text rendering while loading

###### Changes
 
- Allow text to render with an approximation while fonts are downloading 


###### Closes:
 Unreported 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"bd2b41195b5d0c42a9b3617413475100680c50e8","commit_sha":"cbbb81f5c9303a7b7044cc7f6000e24552ed8142"}}

## Deployed to: www.scrippsalpha.org (Thu Nov 15 18:58:31 2018)

#### Closed PRS:

###### #9571 - Sparkle 9562 appointments

###### Changes
 
- Adding UI for the user to select an appointment. Screenshots are WIP as of writing please scroll to the comments to see the latest UI. 
- Creates calendar on request and pops up modal 
- applying data will highlight dates that have information 
- dates will show how many spots are left available 
- clicking on a date will show times that are available ![nov-07-2018 18-02-53](https://user-images.githubusercontent.com/2073148/48166816-c5c95a00-e2b7-11e8-89d7-736675e17241.gif) 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9562 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"10e3fd1c034fa5d3d56c43be4ab5444e0033e307","commit_sha":"704f263d54c60f653b4940ba5b2b2e0f78389adf"}}

## Deployed to: www.scrippsalpha.org (Wed Nov 14 22:19:23 2018)

#### Closed PRS:

###### #9559 - Appointment Booking

###### Changes
 
- [x] Ability to specify appointment availability per-resource ![image](https://user-images.githubusercontent.com/7904/48165912-17bcb080-e2b5-11e8-98b8-2bb19c98ea6d.png) 
- [x] Add appointment input to form builder 
- [x] Populate appointment input URL in call center form 
- [x] Create appointments when form is submitted 
- [x] Add outcome screen to call center 
- [x] Tests 


###### Closes:
 Part of https://github.com/combinaut/sparkle-compassus/issues/466. 

###### #9582 - 1439 remove location relating itself

###### Changes
 
- Only show the recommender sub-locations when a location is a location group (which do not show the map with sublocations) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1439 

###### #9584 - Sparkle scripps 1467 optimize new page modal

###### Changes
 
- 4x Speedup when opening the new page modal 
- Speed up all uses of `NestedSet` by avoiding N queries for child lookups 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1467 

###### #9585 - Cache answers.json

###### Changes
 
- Improve load speed on every page (answers AJAX request load speed) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1486 

###### #9586 - Fix bad param for scoped physician search.

###### Changes
 We had a special condition in the recommender that generated links to the physician finder. This was generating params that the DF wasn’t expecting (e.g. `/physicians?location=64` instead of `/physicians?location=location-64-scripps-clinic-torrey-pines`). We now generate regular scoped links (e.g. `/locations/scripps-clinic/physicians`) and rely on existing code in the PhysiciansController to do redirects to properly formed params. The existing code had to be tweaked slightly because it wasn’t correctly using the `find_with_globbing` code necessary for URLs like `locations/scripps-clinic/scripps-torrey-pines/physicians`. 


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/1482. 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"a927a66f4ff7fcd476a559ba37914a9135b3d933","commit_sha":"c6b22f693874d481790f7bb5d17325411b4718d4"}}

## Deployed to: www.scrippsalpha.org (Tue Nov 13 02:04:43 2018)

#### Closed PRS:

###### #9580 - Fix Blog Post pagination

###### Changes
 
- Fixed Blog Post pagination 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1479 

###### #9581 - When full-width is applied, make width 100%

###### Changes
 
- Fixes infographic size in Windows 7 IE 11. 


###### Closes:
 Fixes https://github.com/combinaut/sparkle-scripps/issues/1481 

###### #9539 - Sparkle 9534 improve promotion resource assignment

###### Changes
 
- Fixed misleading comment on `Promotion` target field 
- Avoid the need to keep `Promotion` target field up to date 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1441, https://github.com/combinaut/sparkle/issues/9534 

###### #9578 - 1459 enable answers for all domains

###### Changes
 
- Gives all domains access to answers controller so that the help tips can be viewed. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1459 

###### #9520 - Add Additional Phone Field to Form Builder. 

###### Changes
 
- reorganize the form builder fields into groups. 
- allow a user to add `additional phone` numbers and `additional email` addresses to a form. 
- Update UI to prevent users from adding multiple fields when they are hardcoded for the CRM Data. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1347, https://github.com/combinaut/sparkle-scripps/issues/1450, https://github.com/combinaut/sparkle-scripps/issues/314, https://github.com/combinaut/sparkle-scripps/issues/473 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"2fa5ed9eb3017c7903104a40bdea5de2ea6937bb","commit_sha":"05184c7b8bf8c6721f17bd6e31aa9e925b9b1a46"}}

## Deployed to: www.scrippsalpha.org (Sat Nov 10 06:05:08 2018)

#### Closed PRS:

###### #9575 - 1336 update assessment subject

###### Changes
 
- update the assessment subject sent to the CRM to be the identifier rather than the title 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1336 

###### #9486 - 640 enable search in giving

###### Changes
 
- Enables Search in giving. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/640, https://github.com/combinaut/sparkle-scripps/issues/1452 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"f1f8a011cdb35d84feb844e52b1e3e4e7d7ba0bb","commit_sha":"05bd6126c4d6f829b882995f6861684022d1c673"}}

## Deployed to: www.scrippsalpha.org (Fri Nov  9 21:45:52 2018)

#### Closed PRS:

###### #9573 - Make sure that override_url_placeholder_pattern always returns a string

###### Changes
No Changes included in the log


###### Closes:
 Closes combinaut/sparkle-scripps#1463. 

###### #9570 - Fix bug where creating a source would error

###### Changes
 
- Fix bug where creating a source would error on default domain under certain circumstances 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1460 

###### #9565 - Fixes large padding on combinaut.com

###### Changes
 
- Makes layers conditional on there being an image to place on it, `.layers` adds 16ems of height even though its empty. This change prevents that from causing problems in the future ![screen shot 2018-11-07 at 10 00 33 am](https://user-images.githubusercontent.com/2073148/48139288-20d95d80-e274-11e8-99b9-fddb89d0ae6d.png) 


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/156 

###### #9564 - Sparkle 1385 seo errors

###### Changes
 
- Adds a URL setter that gets updated on request 
- Fixes logic for handling server created errors ![artboard](https://user-images.githubusercontent.com/2073148/48099925-4708ea00-e1ef-11e8-9a7e-80eddbc758a3.png) ![screen shot 2018-11-06 at 6 05 42 pm](https://user-images.githubusercontent.com/2073148/48099932-4a03da80-e1ef-11e8-87fe-782013cd8bcb.png) 
- 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1385, https://github.com/combinaut/sparkle-scripps/issues/1427 

###### #9568 - hotfix Override base app

###### Changes
 
- Sparkle cms wants to override base app behaviour to make our video posters as large as the containing area. Rather then use the default of `width:auto` 


###### Closes:
 hotfix 

###### #9567 - Hotfix combinaut image errors

###### Changes
 
- Images fallbacks for sections with videos will no longer spill over their containers on tablet and lower 
- Footers "learn more" links for `.pull-left` components will now float right on tables and lower to prevent issue of the link appearing on under the image instead of the text. this issue is tablet only. ![screen shot 2018-11-07 at 10 57 44 am](https://user-images.githubusercontent.com/2073148/48143184-41a5b100-e27c-11e8-9ae0-e778cecc7cd9.png) 


###### Closes:
 hotfix 

###### #9558 - Sparkle scripps 1454 improve cross domain promotions

###### Changes
 
- Cross domain promotions are now created in the target domain. You can now set the publishing domain on each source, allowing greater customization of cross domain `Promotion` `Source` urls. ![image](https://user-images.githubusercontent.com/87623/48036058-87973380-e11b-11e8-87d8-a856177bfbce.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1454, https://github.com/combinaut/sparkle-scripps/issues/1444 

###### #9563 - Add `featured_summary` to `EntityServices`

###### Changes
 
- Location Services now get a "featured summary" field like Services 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9552 

###### #9561 - Fixes hero banner issues with ie

###### Changes
 
- fixed the word break weirdly in IE 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1457 

###### #9509 - Sparkle 7389 new help system

###### Changes
 
- Creates the new help modal with ancestry 
- WIP as of this time please see below as pr gets updated ![screen shot 2018-10-24 at 6 08 56 pm](https://user-images.githubusercontent.com/2073148/47465210-fa1e2000-d7b9-11e8-9af9-15af0a9da005.png) 


###### Closes:
 https://github.com/combinaut/sparkle/issues/7389 

###### #9560 - Update to latest UberSelect rails

###### Changes
 
- Don't double initialize UberSelect on selects 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1455 

###### #9557 - Update Press Ganey FAQ url

###### Changes
 
- Update Press Ganey FAQ url from underscore to slash 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1438 

###### #9550 - Remove dead promotion_subdomain  method

###### Changes
 I noticed that this method was unused while reviewing https://github.com/combinaut/sparkle/pull/9549. 


###### Closes:
 Unreported 

###### #9555 - Fix candidate_name method.

###### Changes
 We used to pass `nil` to represent the control candidate, but because of changes due to how we cache the metrics, we now pass `0`. We can no longer use nil because we need a unique index on the MetricCache and NULL isn’t counted as unique from other NULLs in MySQL. 


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/9554. Closes https://github.com/combinaut/sparkle-scripps/issues/1453. 

###### #9549 - Fix bug where shortcut url ignored custom domain

###### Changes
 
- Fixed bug where shortcut urls would redirect to the promotion target but ignore custom publishing domains 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1451 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"a06dab72f6f2c92f0bbcc9c489fb72d2cc11b861","commit_sha":"8370c76ace86cfb9bc1ac51df60cf0564e49f351"}}

## Deployed to: www.scrippsalpha.org (Sun Nov  4 05:05:59 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"f129fe89fd2cdb9c2b25be3d8b6b887607f78da0","commit_sha":"37157734315ca6d30f079403ceea91081deed9b2"}}

## Deployed to: www.scrippsalpha.org (Sat Nov  3 13:01:14 2018)

#### Closed PRS:

###### #9548 - Updates print stylings based on request

###### Changes
 
- Update print styles of physicians show page 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1417 

###### #9546 - Sparkle scripps 1429 featured summary

###### Changes
 
- Fixed bug where SEO metadata would not backfill under certain conditions 
- Summary now backfills from Google SEO description 
- Added "featured summary" field to services so users can customize the summary that appears on the "Featured" services list ![image](https://user-images.githubusercontent.com/87623/47881358-2271d400-dde3-11e8-98c1-7ababe47ccf1.png) ![image](https://user-images.githubusercontent.com/87623/47881372-30bff000-dde3-11e8-8726-bc32a986eac8.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1429 

###### #9547 - Sparkle scripps 1442 improve seo character counts

###### Changes
 
- Set a target of 30 characters for facebook (min 20, max 40) 
- Show max character target instead of sweetspot ![image](https://user-images.githubusercontent.com/87623/47885726-b055bb00-ddf3-11e8-9421-409e30330b50.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1447 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"e56113af80071ca72dbe10aafa613ed07bec44c3","commit_sha":"882c00aaf996861a61d1d148d54a79cd85975b41"}}

## Deployed to: www.scrippsalpha.org (Thu Nov  1 22:28:10 2018)

#### Closed PRS:

###### #9545 - Add action caching to single page metrics.

###### Changes
 If you are looking at a metrics for a single page for a date range that doesn’t include today, we can permanently cache the results. Also set the default range to not include today so we can show cacheable queries by default. 


###### Closes:
 Closes https://github.com/combinaut/sparkle-combinaut/issues/155 

###### #9396 - Sparkle 9392 thumbnail selector styles

###### Changes
 
- Restyling the thumbnail selector to have tabs that matches the comps 
- Screenshots to come, currently WIP 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9392 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"aba0b56f0bc61fc9900dbd1d6ab518ed8ca10885","commit_sha":"aaf0060e031bc8ce8cafa28005db48e825fed7a2"}}

## Deployed to: www.scrippsalpha.org (Wed Oct 31 18:33:20 2018)

#### Closed PRS:

###### #9524 - Fix double breadcrumbs

###### Changes
 
- Remove dup breadcrumbs showing on locations/find and physicians/find pages 


###### Closes:
 [unreported] 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"0def31854026d3b9f3ce614db755ab0545d97559","commit_sha":"271b5cc0640bba2b161a59f4b3d2243a0028ae19"}}

## Deployed to: www.scrippsalpha.org (Wed Oct 31 18:10:49 2018)

#### Closed PRS:

###### #9540 - Adjust google SEO description target length

###### Changes
 
- Adjust google SEO description target length to allow for shorter descriptions 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1442 

###### #9536 - Remove tagline from MDA Logo on default template

###### Changes
 
- remove the tagline from the md_anderson logo in the default template. 
- now all templates use the no-tagline mda logo. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1345 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"fe3e012156c6f3787d720727f0921310f796f312","commit_sha":"aedde15bb9078e40cc8b947a1bc1ecf5445bd529"}}

## Deployed to: www.scrippsalpha.org (Wed Oct 31 17:04:48 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"2edebf4b96b3d5be39ccccce4267bcb4947b0d35","commit_sha":"4078df9fbcf1588e0c8811d42d4bfbafc9ee5c05"}}

## Deployed to: www.scrippsalpha.org (Wed Oct 31 16:40:39 2018)

#### Closed PRS:

###### #9537 - Remove `federal income` from giving footer

###### Changes
 
- remove text from giving footer as requested 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1440 

###### #9538 - Update Director

###### Changes
 
- updated director to only handle get/head requests. 


###### Closes:
 Unreported 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"a2e1b34e8c795aef4fcfe0ae06f62d5324a272a9","commit_sha":"f153c17d1df25e43f4c039bf52ef1ec4ad399a99"}}

## Deployed to: www.scrippsalpha.org (Mon Oct 29 19:02:33 2018)

#### Closed PRS:

###### #9526 - Add image condition

###### Changes
 
- only try to get variants if there is an image present. 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9525 

###### #9522 - Sparkle scripps issues 1420

###### Changes
 
- Improved SEO analysis speed by 40-100x **Before** ![image](https://user-images.githubusercontent.com/87623/47535824-0b2a6800-d872-11e8-8de4-5d5c5d592a1c.png) **After** ![image](https://user-images.githubusercontent.com/87623/47535705-7d4e7d00-d871-11e8-9fa4-461f4d2eb68e.png) 
- Re-implemented SEO Snippet title length indicator **Default value is measured** ![image](https://user-images.githubusercontent.com/87623/47536795-0a480500-d877-11e8-9a9b-383fced55e2b.png) **Overridden value is measured** ![image](https://user-images.githubusercontent.com/87623/47536812-1e8c0200-d877-11e8-966e-3aaf140506a6.png) **Per-platform title and description target lengths and analysis** ![image](https://user-images.githubusercontent.com/87623/47597601-2023fb80-d945-11e8-98b8-42583127aba5.png) ![image](https://user-images.githubusercontent.com/87623/47597605-2f0aae00-d945-11e8-8776-0191e7a3caf4.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1420 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"d2481a0558760db9e2f63ac93c6be4771df146a6","commit_sha":"5153126358c767dde30eb060a62ed2ff29420d2f"}}

## Deployed to: www.scrippsalpha.org (Mon Oct 29 16:37:25 2018)

#### Closed PRS:

###### #9516 - Add Metric Cache

###### Changes
 * Implement a daily cache to speed up report calculations * Add session duration metric 


###### Closes:
 Closes https://github.com/combinaut/sparkle-combinaut/issues/145 

###### #9521 - Remove some padding on the share buttons

###### Changes
 
- removes some padding on the share buttons 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1254 

###### #9507 - Our default is that the image is centered

###### Changes
 
- our default is that the image is centered, we should indicate that correctly to the user. 
- make sure to order the devices correctly so that the correct image appears for the correct device type. 


###### Closes:
 Unreported 

###### #9519 - Adds a sync warning partial

###### Changes
 
- adds a sync warning partial for a physician trying to be updated without a location. 


###### Closes:
 Fixes https://github.com/combinaut/sparkle/issues/9499 

###### #9517 - Updates giving footer

###### Changes
 
- updates giving footer with requested text. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1401 

###### #9518 - Fixes Location Edit page not working

###### Changes
 
- fix error on location edit page. 
- Only show recommender for locations with a parent (we want to recommend siblings). 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9515 

###### #9505 - Report Tweaks

###### Changes
 * Add IP based exclusion. * Exclude logged in users. * Add includes to metric table. * Prevent multiple loads of metric summary. 


###### Closes:
 Closes https://github.com/combinaut/sparkle-combinaut/issues/146 Closes combinaut/sparkle-combinaut#147 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"9ce34ecc898f317574f13534ef792ea917c0cd1d","commit_sha":"514a7b6fa30345648f1735dbbc6bff458a4bcf5c"}}

## Deployed to: www.scrippsalpha.org (Wed Oct 24 15:20:26 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"4ccb367b8617cef21491ce251b725bcf2d9efc5a","commit_sha":"f269256959e1d5c4a2663f0827b8546f7390215e"}}

## Deployed to: www.scrippsalpha.org (Tue Oct 23 20:55:27 2018)

#### Closed PRS:

###### #9497 - Don’t load all associated records to verify exists

###### Changes
 
- Improve Media Contact index page speed 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/897 

###### #9427 - Search Index Page Fixes

###### Changes
 * Require a `IndexPage::SitewideSearches` page for each publishing domain. * Archive `/search` page that was autogenerated for some domains and is unnecessary now that we have `IndexPages`. * `update_slug_alias` on `IndexPage` when `publishing_status` changes. * Fix `ResourceIndex.index_name` to ensure that correct CSS class is added when underlying `IndexPage` is present. 


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/9425 

###### #9492 - Don’t re-sort unless necessary

###### Changes
 
- Improve shared component search speed 


###### Closes:
 https://github.com/combinaut/sparkle/issues/7565 

###### #9490 - Don’t create redirect if record fails to save

###### Changes
 
- Don’t create redirect if record fails to save 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9488 

###### #9491 - Improve Shared Component Search init speed

###### Changes
 
- Makes it faster to deselect a component in page builder 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9476 

###### #9487 - Improved index table view config modal

###### Changes
 
- Index table view settings config no longer cancels if you click out 
- Index table view settings config resets control state if “Done” isn’t clicked. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1413, https://github.com/combinaut/sparkle-scripps/issues/1414 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"76018eb852bd11e503bada17157a392dce096aee","commit_sha":"bd71c42b370d9e30af4832049c8274d70f25e50d"}}

## Deployed to: www.scrippsalpha.org (Mon Oct 22 23:21:06 2018)

#### Closed PRS:

###### #9478 - Updates Sparkle time for Scripps `www`

###### Changes
 
- update the client_time for scripps `www` time format to be hour with minutes unless we are at the beginning of the hour. Examples: 3:00 PM -> 3 pm 3:30 PM -> 3:30 pm 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1302 

###### #9473 - Fix flash of DF results page.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/1408. 

###### #9477 - Link dialogue fields are the same size

###### Changes
 
- adds proper padding to all form elements in link dialog ![screen shot 2018-10-22 at 3 22 54 pm](https://user-images.githubusercontent.com/2073148/47315256-0d8e8700-d612-11e8-94a4-86c51b6537f2.png) ![screen shot 2018-10-22 at 3 22 44 pm](https://user-images.githubusercontent.com/2073148/47315257-0d8e8700-d612-11e8-9c54-03336fabf304.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1363 

###### #9479 - Prevents the x axis scroll on admin nav

###### Changes
 
- Prevents the x axis scroll on admin nav, admin bar will no longer scroll left and right when users focus is not on window. ![screen shot 2018-10-22 at 4 43 10 pm](https://user-images.githubusercontent.com/2073148/47318246-952bc400-d619-11e8-9912-60bf72612146.png) 


###### Closes:
 https://github.com/combinaut/sparkle/issues/7916 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"0669b4db6bf7ad75ddf24d216daadae19017abb7","commit_sha":"cef37026c31206c32638d4f4b840c7e1536afa31"}}

## Deployed to: www.scrippsalpha.org (Mon Oct 22 21:47:51 2018)

#### Closed PRS:

###### #9483 - Updates Additional Hours to just say Hours

###### Changes
 
- Updates the Hours Label on Locations 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1394 

###### #9482 - Fix sync warning colour

###### Changes
 
- Fixed sync warning colour 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9481 

###### #9480 - Remove code to duplicate shared components

###### Changes
 
- Remove code to duplicate shared components 


###### Closes:
 https://github.com/combinaut/sparkle/issues/8399 

###### #9468 - Improve user email uniqueness error message

###### Changes
 
- User email uniqueness error message now differentiates between active and inactive users 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1393 

###### #9467 - Prevent double submit of search filter.

###### Changes
 We were submitting the form of a search filter on `change` but when pressing enter on a text input we would get a second submit. 


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/1403 

###### #9484 - On click of a data-attribute

###### Changes
 
- when the data-attribute is clicked then scroll to the top, not whenever the document is clicked. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1411 

###### #9475 - Page Builder deselects components when clicking outside of components

###### Changes
 
- Clicking outside of a component will unselect component when clicking outside ![oct-22-2018 14-35-02](https://user-images.githubusercontent.com/2073148/47311424-b4b9f100-d607-11e8-9e43-6135134809ba.gif) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1388 

###### #9465 - Close button overlaps alert text

###### Changes
 
- Switch to using grid this is so we can have an even layout on both sides of the text content. 
- Removes unused JS method. 
- ![screen shot 2018-10-19 at 5 45 30 pm](https://user-images.githubusercontent.com/2073148/47245515-99f93980-d3c7-11e8-9f27-e94929497793.png) 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9457 

###### #9474 - Prevent accidental tab text selection

###### Changes
 
- Prevent accidental tab text selection 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9449 

###### #9472 - List Views: fixes movement when no ownership icons

###### Changes
 
- Removes extra margin that will make the cell taller when there is no icons 
- Fixes css for header row so select all checkbox will not cause the title to jump around. ![proof](https://user-images.githubusercontent.com/2073148/47304573-060cb500-d5f5-11e8-8b26-b8aed9a787e7.gif) 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9471 

###### #9470 - Fix bug in component image cropper

###### Changes
 
- Fixed bug in component image cropper when setting max crop dimensions 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1399 

###### #9469 - Adds the MD Anderson 3 column template

###### Changes
 
- adds the MD Anderson three column template. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1329 

###### #9466 - Fix bug where you couldn’t search for inactive users

###### Changes
 
- Fixed bug where you couldn’t search for inactive users 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1404 

###### #9462 - 1356 Add BG Positioning to All Domains.

###### Changes
 
- Allow users to set the anchor of an image position on hero-banners 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1356, https://github.com/combinaut/sparkle-scripps/issues/1031 

###### #9463 - Ensure page builder preview ready event triggers

###### Changes
 
- Fixed page builder preview not displaying in development mode if Developer tools was disabling request caching 


###### Closes:
 Unreported 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"358d057a1c6de8b2550b5ee76fb1f9ed4561c03f","commit_sha":"f83f9ffa7e2b7d446ecf2368c030b32cd86c45e2"}}

## Deployed to: www.scrippsalpha.org (Sat Oct 20 06:13:06 2018)

#### Closed PRS:

###### #9464 - Ability to customize assessment submitter info instructions.

###### Changes
 ![image](https://user-images.githubusercontent.com/7904/47244273-d6766680-d3c2-11e8-9323-de52f91edbbe.png) 


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/1049. 

###### #9461 - Sparkle 9451 report metrics

###### Changes
 
- Report metrics are now display flex, this will allow up to 8 metrics to be displayed inline on a 1280px width screen before scrolling is required. 
- Report charts will now set the position of the x axis based on if there is an event chart or not ![whathappens](https://user-images.githubusercontent.com/2073148/47239314-f0a84880-d3b2-11e8-9f1f-6c1acc805ad9.png) ![screen shot 2018-10-19 at 2 16 50 pm](https://user-images.githubusercontent.com/2073148/47239328-f69e2980-d3b2-11e8-9fc7-8498863aea6d.png) ![screen shot 2018-10-19 at 2 07 29 pm](https://user-images.githubusercontent.com/2073148/47239329-f736c000-d3b2-11e8-9920-708496c630c0.png) 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9451, https://github.com/combinaut/sparkle/issues/9452, https://github.com/combinaut/sparkle/issues/9448 

###### #9455 - Make sure underlying event record is set correctly.

###### Changes
 When we call `create_from_resource` and pass the source as the resource, we want to make sure that the underlying source target is set as the record. Otherwise our analytics on the underlying pages doesn’t reflect any events generated on campaigns that target those resources. 


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/9454. 

###### #9460 - Don’t try to render a redirect inside a responsive iframe.

###### Changes
 If we decide that we want to redirect, responsive preview shouldn’t render the wrapping layout, since we aren’t going to show it anyway. 


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/9439. 

###### #9459 - Sparkle scripps 1400 update video component options

###### Changes
 
- Removed "Hide Video Player Title" option from YouTube components because it is no longer a supported option for embedded YouTube videos 
- Enabled modest branding on YouTube videos to reduce UI clutter on smaller embedded videos 
- Fixed bug where Vimeo components didn't make use of their "Hide Video Player Title" option 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1400 

###### #9456 - Remove override X on windows and mac & Safari jumping table bug

###### Changes
 
- This problem comes from how each OS displays the x-like symbol. Mac has a little more padding Windows a little less. To remove confusion from both we display the x using pseudo elements we build ourselves ![chromewinmac](https://user-images.githubusercontent.com/2073148/47226877-92b63980-d38f-11e8-9051-d1f9fea58a34.png) 
- In tables fixes checkbox status markup so that they are in one div and removes css so we do not cause jumping problems in safari 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1397, https://github.com/combinaut/sparkle-scripps/issues/1396 

###### #9407 - Sparkle 139 sticky popup

###### Changes
 
- Sets tooltip delay on mouse out to 250ms 
- Event tooltip will now display on the x coordinate where the mouse enters, unless that point is too close to the left or right side of the graph then we move the tool tip into a place it can be viewed from. ![tools](https://user-images.githubusercontent.com/2073148/47042688-ed665000-d159-11e8-88e0-b63d2d8b04d4.gif) 


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/139 

###### #9453 - Prefer resource selector if available

###### Changes
 
- Prefer resource selector if available when selecting targets 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9437 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"18618fd54312725b55cb15c9de55548b7c353eb0","commit_sha":"88d531f4f6c0ba337da1bc16f3036eee60308105"}}

## Deployed to: www.scrippsalpha.org (Fri Oct 19 01:50:16 2018)

#### Closed PRS:

###### #9421 - 732 fix back to top button

###### Changes
 
- Don't show the backToTop Button when we are in tablet and smaller 
- Don't show back to top button when we are scrolled to the top (buffer of 1 vh). 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/732, https://github.com/combinaut/sparkle-scripps/issues/442 

###### #9447 - Sparkle scripps 1391 fix page builder loading event

###### Changes
 
- Fixed bug where page builder iframe could fail to show 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1391 

###### #9445 - Fix bug where edit snippet button did not work

###### Changes
 
- Fixed bug where edit snippet button did not work 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9444 

###### #9446 - inactive row labels changes opacity not color

###### Changes
 
- As per ticket labels in an inactive row will be opacity 75%, which is more readable than 50%. 
- There looks to be no danger with making this change as the color white was targeting these elements directly ![screen shot 2018-10-18 at 3 24 31 pm](https://user-images.githubusercontent.com/2073148/47178699-069e0680-d2ea-11e8-9e18-ed05a4f63caa.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1390, https://github.com/combinaut/sparkle-scripps/issues/1387 

###### #9440 - Fix can’t edit entity service.

###### Changes
 Components overridden via inheritance were not being included in the raw or uncustomized component data, causing PB to choke. 


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/9438. 

###### #9443 - Separate open_graph_title from head_title.

###### Changes
 Open graph title uses the facebook title and then falls back to `head_title`. `head_title` uses the google title and falls back to other titles as it did before. 


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/9435. 

###### #9426 - Scripps 1346 Status Messages

###### Changes
 
- Flash messages no longer appear in the middle of the header, potentially covering up buttons on PB pages. Now is centered and pushed down 30 px 
- Flash messages on Admin now use the info-messages helper to display messages. I've modified the message style to look more pill shaped. 
- Info-messages are now able to be dismissed. When flash messages are show they come with this dismiss feature, but will also fade away after 3 seconds 
- Other Alert boxes inherit this new color style. @jbraem please let me know if you don't want this. See examples of this below 
- Also added fun close animation because we can. ![animations](https://user-images.githubusercontent.com/2073148/47118180-8a95b700-d234-11e8-824d-65469871295b.gif) ![screen shot 2018-10-17 at 4 40 48 pm](https://user-images.githubusercontent.com/2073148/47117337-1528e700-d232-11e8-8879-6fb1f3923437.png) ![screen shot 2018-10-17 at 5 09 39 pm](https://user-images.githubusercontent.com/2073148/47117342-19550480-d232-11e8-8bd1-8f7cb1226e16.png) ![screen shot 2018-10-17 at 5 35 47 pm](https://user-images.githubusercontent.com/2073148/47118144-718d0600-d234-11e8-959a-8d42b180f24a.png) ![screen shot 2018-10-17 at 5 16 40 pm](https://user-images.githubusercontent.com/2073148/47118156-794caa80-d234-11e8-95d0-e38efa1b8a9d.png) ![screen shot 2018-10-17 at 5 34 14 pm](https://user-images.githubusercontent.com/2073148/47118169-86699980-d234-11e8-8bcb-efbecac2c949.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1346 

###### #9433 - Deter infinite loops in custom PageAlias targets

###### Changes
 
- Prevent users from creation a `PageAlias` that directly or indirectly targets itself 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1272 

###### #9432 - Fixed page subclass view lookup on validation fail

###### Changes
 
- Fixed bug where a validation error while saving would cause a `PageAlias` to render the wrong edit form 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1386 

###### #9422 - Sparkle scripps 1380 fix creation of location services

###### Changes
 
- Fixed bug that prevent Location Services from being added on the services index page 
- Fixed bug where Location Service target selector showed Medical Groups and Locations lists in the creation form modal 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1380, https://github.com/combinaut/sparkle-scripps/issues/1381 

###### #9415 - Sparkle scripps 1368 fix bug where snippet does fall back to defaults

###### Changes
 
- Fixed bug where the clickable area of an SEO Snippet did not always fill the container 
- Fixed bug where blank SEO snippet fields did not fall back to default values in the snippet preview 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1368, https://github.com/combinaut/sparkle-scripps/issues/1376 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"0985f634de1532835983633665cdc67f9998786a","commit_sha":"fe9276a165d14579d7059e7b793520b533fafc48"}}

## Deployed to: www.scrippsalpha.org (Thu Oct 18 04:19:23 2018)

#### Closed PRS:

###### #9418 - Fix Validation Error page for source creation CSS

###### Changes
 
- fixes css error by only adding class when `.code-shortcut-link` is shown ![screen shot 2018-10-17 at 11 39 18 am](https://user-images.githubusercontent.com/2073148/47098876-0cb8b800-d202-11e8-82d1-6f6dd1ffb2c5.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1362 

###### #9430 - Turn Featured Services off on Location services

###### Changes
 
- if the services parent is a location (ie. this is an entity service, then turn off the featured tab). 
- Only show featured servies one scripps clinic 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1157 

###### #9431 - Sparkle scripps 1382

###### Changes
 
- Fixed bug where custom targets couldn't be assigned 
- Fixed bug where redirect fields would show in the new record modal 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1382 

###### #9429 - Remove custom label bg color

###### Changes
 
- fix label not changing colour correctly on hover. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1384 

###### #9428 - Gives a margin to the label filterer

###### Changes
 
- gives some padding after the bottom border of the search filter. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/778 

###### #9423 - Assignment List Fixes

###### Changes
No Changes included in the log


###### Closes:
 Closes combinaut/sparkle-scripps#1379. 

###### #9420 - Fix assignment list autocomplete not respecting model.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/1378. 

###### #9410 - Sparkle scripps 1193 remove slug from entity services

###### Changes
 
- Fixed bug where EntityService showed a slug field that didn't do anything 
- Fixed bug where Page urls couldn't overridden 
- Fixed bug where "create redirect field" would appear when it shouldn't 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1193, https://github.com/combinaut/sparkle-scripps/issues/1370, https://github.com/combinaut/sparkle-scripps/issues/1369, https://github.com/combinaut/sparkle-scripps/issues/1371 

###### #9419 - Re-add list summarizer.

###### Changes
 * List summarizer was accidentally removed in https://github.com/combinaut/sparkle/commit/7955bfdacffcf1fff05955ae2aa473872c0e2342 


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/161. 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"ef07a1f7dd8ccee5a6c7626a6f9769f9336e94e2","commit_sha":"b20aad4fbdc8d93ca9c47659cdbb7ef459e7cad8"}}

## Deployed to: www.scrippsalpha.org (Wed Oct 17 16:59:31 2018)

#### Closed PRS:

###### #9416 - Page type can now be chosen from index page “add”

###### Changes
 
- Page type can now be chosen from pages index page “Add Page” button ![image](https://user-images.githubusercontent.com/87623/47086054-5a66fd80-d1cd-11e8-8072-705e40a8ad5c.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1365 

###### #9414 - 923 dont show pagination when out of range

###### Changes
 
- if we go past the total number of pages that exist, do not show next/prev pagination, just show a link to the beginning of the collection. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/923 

###### #9409 - Allows empty lines in a csv

###### Changes
 
- allows users to upload a csv with empty rows and it not explode. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1129 

###### #9412 - Fix labels not persisting.

###### Changes
 hidden_field was not being included in the label template because the `+` was on the following line. Multi-line concatentation needs the plus sign on the preceding line. 


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/1372. 

###### #9404 - Sparkle scripps 1339 assessment completion pages validations

###### Changes
 
- Improved Assessment validations ![image](https://user-images.githubusercontent.com/87623/47036858-415d3e80-d132-11e8-91ce-220f7c2f5f3b.png) 
- Saving an Assessment with a blank completion page will now remove it automatically 
- Unified terminology for completion pages in the UI. They are now referred to as "Results Pages" 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1366, https://github.com/combinaut/sparkle-scripps/issues/1339 

###### #9394 - Add a description to Compassus SF lead when there is no source.

###### Changes
 * Add resource to `Salesforce::Submission` * Add a lead description for organic submissions in Compassus. 


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/471. 

###### #9401 - Fix giant avatars

###### Changes
 * Use icon_url for avatars * Assets shouldn't have asset behaviour 


###### Closes:
 Closes #9395. 

###### #9413 - Fix dropdown appearing too far down.

###### Changes
 **Before** ![image](https://user-images.githubusercontent.com/7904/47048998-07a82a00-d16a-11e8-93f1-5c2a3c7920c5.png) **After** ![image](https://user-images.githubusercontent.com/7904/47048972-f52df080-d169-11e8-836c-76129c44e7f4.png) 


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/1373. 

###### #9411 - selector box should now align top like status indicator

###### Changes
 
- Checkboxes will now align with status indicator ![checkchceck](https://user-images.githubusercontent.com/2073148/47046591-82ba1200-d163-11e8-9f71-b703b7efc488.gif) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1367 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"c40c71b9cd1f5b56e5eb107b02b23040301c772c","commit_sha":"d44e130d67e8d9ce35d0eabece24bde20967086c"}}

## Deployed to: www.scrippsalpha.org (Tue Oct 16 20:50:13 2018)

#### Closed PRS:

###### #9405 - Removed duplicate sync status from search results

###### Changes
 
- Removed duplicate sync status from search results 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1299 

###### #9406 - Set thumbnail height to auto

###### Changes
 
- Fixes stretched images of template thumbnails in alpha. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1337 

###### #9403 - Try to reduce random test failures by discarding outliers.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/1170. 

###### #9408 - Fix focused highlight not present on tools column.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/33. 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"36efe7e4d0a535f13eaf4ad82421910f28fe77d6","commit_sha":"41897dffdfd120986f1d99a40a8e9e07378d95ff"}}

## Deployed to: www.scrippsalpha.org (Tue Oct 16 16:35:53 2018)

#### Closed PRS:

###### #9400 - Fix mobile cta showing on desktop

###### Changes
 
- Fix mobile cta showing on desktop 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1364 

###### #9398 - Adds copy animation to facebook link copy button

###### Changes
 
- Adds copy animation to facebook link copy button ![copystate](https://user-images.githubusercontent.com/2073148/47010953-866f7980-d10e-11e8-9aad-85d0cd32318e.gif) 


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/138 

###### #9386 - removes margin on uberselects

###### Changes
 
- forms that use uberselects should have their footer captions align properly now. ![screen shot 2018-10-15 at 10 17 50 am](https://user-images.githubusercontent.com/2073148/46957072-c0844100-d064-11e8-9365-1862bdf0a057.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1344 

###### #9393 - Sources and Promotions now use TargetSelector

###### Changes
 
- Fixed bug where promotions and sources didn't show the custom target url by default when it was set 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/809, https://github.com/combinaut/sparkle-scripps/issues/1149, https://github.com/combinaut/sparkle-scripps/issues/727 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"e271de9ac58b9606379a899ebc0771c4d9e13167","commit_sha":"53677651ecb5a09e77b584a8c0572bb943f7e0ff"}}

## Deployed to: www.scrippsalpha.org (Mon Oct 15 22:44:13 2018)

#### Closed PRS:

###### #9356 - Fix Mobile CTA

###### Changes
 
- Fixes the modal backdrop showing without any modal 
- Fixes not being able to fill out assessments correctly 
- Fixes the assessment CTA hanging around after the assessment has begun. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1333, https://github.com/combinaut/sparkle-scripps/issues/1341, https://github.com/combinaut/sparkle-scripps/issues/1342 

###### #9375 - create share link only happens on demand

###### Changes
 
- Facebook campaigns will not generate on page load anymore. 
- New problem, User has to click twice to copy the link to clipboard. This is a security feature in JS. ![screen shot 2018-10-12 at 2 33 48 pm](https://user-images.githubusercontent.com/2073148/46887523-db1fa580-ce2b-11e8-9faf-df08aa07acc7.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1353 

###### #9378 - Add video tracking to analytics.

###### Changes
 Add video tracking to analytics. ![image](https://user-images.githubusercontent.com/7904/46893199-25aa1d80-ce3e-11e8-9c51-6f09c88bed21.png) 


###### Closes:
 Closes https://github.com/combinaut/sparkle-combinaut/issues/133. 

###### #9381 - Better source linking

###### Changes
 
- Consistent sidebar listings 
- Ensure that Sources and Promotion can add Sources 
- Allow sources to be linked from any resource 
- Fix quick-add of sources 


###### Closes:
 Unreported 

###### #9387 - Can't click assessment scoring down arrow

###### Changes
 
- removing pointer events on select after allows for clicks to work properly ![arrowbutton](https://user-images.githubusercontent.com/2073148/46958735-7bfaa480-d068-11e8-8fcc-d912c590d461.gif) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1350 

###### #9384 - Social shares new

###### Changes
 
- Removes FacebookShare in favor of a universal SocialShare 
- can be used with any other service 
- set the Social Media service in a parameter 
- uses `Social` defaults 
- applies the Social preset (Facebook) when creating the source, instead of separate defaults 
- makes `shortcut_url` a pure lookup method unless `auto_create` is enabled Note: You now have to pass `auto_create: true` for the source to be created if it doesn't already exist. Otherwise it only returns the existing shortcut_url or nil if non exists. This allows us to check for the URL without creating anything. @brianbest You now have to pass the `service` and the `auto_create` parameters to the URL. The only service added right now is `facebook`, but `twitter` will be next. When you don't pass `auto_create` we only do a lookup. You can now run this on load. If a URL is returned, skip the create button and just start at the copy state (Show URL, button says "Copy URL"). If the URL is nil, start at Create state. 


###### Closes:
 Unreported 

###### #9380 - Fixes the physician show all link on location edit

###### Changes
 
- Fixes the view all physicians link on the location edit page. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1286 

###### #9385 - Allow hardcoded vanity path campaign targets

###### Changes
 
- Allow hardcoded vanity path campaign targets 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1359 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"4964577b0817bf39ccf1f121355514676d98e90c","commit_sha":"1bea2391b26a43dff66d855cf8f569aa383ae127"}}

## Deployed to: www.scrippsalpha.org (Sat Oct 13 05:41:07 2018)

#### Closed PRS:

###### #9373 - Adds facebook copy link styles to copy shortcut

###### Changes
 
- Adds styles to UTM Tracking copy button ![screen shot 2018-10-12 at 11 38 58 am](https://user-images.githubusercontent.com/2073148/46879537-52e1d600-ce14-11e8-8f2c-f92a1a5d5f0e.png) 


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/136 

###### #9379 - 1335 update hospitals on physician profile

###### Changes
 
- Only show physicians hospital locations in the overview tab. 
- Update text from Medical Staff at to Hospital Affiliations. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1335 

###### #9376 - Fix slug missing error on physicians

###### Changes
 
- Fixed "slug missing" error on physicians 


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/469 

###### #9370 - No need to geocode unless there is a change.

###### Changes
 Prevents unnecessary geocoding requests which can lead to timeouts. 


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/1348. Closes https://github.com/combinaut/sparkle/issues/9368. 

###### #9374 - Facebook preview removes placeholder text, less opacity on hover

###### Changes
 
- Removes placeholder text. 
- Less opacity on hover effect ![screen shot 2018-10-12 at 12 30 20 pm](https://user-images.githubusercontent.com/2073148/46881833-a3f4c880-ce1a-11e8-89fc-94d774829c14.png) ![screen shot 2018-10-12 at 12 26 20 pm](https://user-images.githubusercontent.com/2073148/46881834-a3f4c880-ce1a-11e8-9deb-a0f73ba995ff.png) 


###### Closes:
 unreported 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"a3a864b51952fbb396bd52bbc1c11c815564f290","commit_sha":"4bdb80bb820ffc5da2609c9a04afdad4e53c3515"}}

## Deployed to: www.scrippsalpha.org (Fri Oct 12 16:08:19 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"3552329d74c76d65d077b1fb88b1cec0d0df77eb","commit_sha":"e15164bcd93c0e41ea15457ba353020f4e421a1c"}}

## Deployed to: www.scrippsalpha.org (Fri Oct 12 15:27:17 2018)

#### Closed PRS:

###### #9339 - Better sources

###### Changes
 
- Improves how source's UTM builder is exposed 
- fixes missing icons 
- renames Vendor and Record Type into UTM Medium and UTM Source to better reflect purpose <img width="879" alt="screenshot 2018-10-10 22 45 05" src="https://user-images.githubusercontent.com/5093/46779612-317ece00-ccde-11e8-9e37-5961a5c2d502.png"> 


###### Closes:
 Unreported 

###### #9372 - Autosize dynamically added textareas

###### Changes
 
- Fixed bug where dynamically added textareas didn't grow 


###### Closes:
 Unreported 

###### #9371 - Target selector now allows resource to be removed

###### Changes
 
- Target selector now allows resource to be removed ![image](https://user-images.githubusercontent.com/87623/46838082-908b2400-cd6c-11e8-93bb-e7b16cb5005e.png) and ![image](https://user-images.githubusercontent.com/87623/46838093-95e86e80-cd6c-11e8-9f90-cca5620c9a7e.png) 


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/419 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"4719ae4f1f31bb90caea7a7563bd5136ba49a7e3","commit_sha":"f9ebd6fcee756d316450b48ac0fbac81bfc67382"}}

## Deployed to: www.scrippsalpha.org (Fri Oct 12 15:17:32 2018)

#### Closed PRS:

###### #9339 - Better sources

###### Changes
 
- Improves how source's UTM builder is exposed 
- fixes missing icons 
- renames Vendor and Record Type into UTM Medium and UTM Source to better reflect purpose <img width="879" alt="screenshot 2018-10-10 22 45 05" src="https://user-images.githubusercontent.com/5093/46779612-317ece00-ccde-11e8-9e37-5961a5c2d502.png"> 


###### Closes:
 Unreported 

###### #9372 - Autosize dynamically added textareas

###### Changes
 
- Fixed bug where dynamically added textareas didn't grow 


###### Closes:
 Unreported 

###### #9371 - Target selector now allows resource to be removed

###### Changes
 
- Target selector now allows resource to be removed ![image](https://user-images.githubusercontent.com/87623/46838082-908b2400-cd6c-11e8-93bb-e7b16cb5005e.png) and ![image](https://user-images.githubusercontent.com/87623/46838093-95e86e80-cd6c-11e8-9f90-cca5620c9a7e.png) 


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/419 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"4719ae4f1f31bb90caea7a7563bd5136ba49a7e3","commit_sha":"357bdab93878e26834f9994f8366c0c036bf5e4a"}}

## Deployed to: www.scrippsalpha.org (Thu Oct 11 21:00:02 2018)

#### Closed PRS:

###### #9344 - Sparkle scripps 1324 fix page alias as promotion target

###### Changes
 
- Fixed bug that prevented a `Promotion` targeting a `PageAlias` from rendering the `Promotion` content 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1324 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"7ada8d4e3916b9fbed36b57ed19aef36145616af","commit_sha":"a6cfad46721088577f72de35f9a18993c4d59273"}}

## Deployed to: www.scrippsalpha.org (Thu Oct 11 15:39:37 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"2f371d9aa3cdafe6e7e5c02022617575635a1261","commit_sha":"bb0d62df7733108e4eb723b2cba809c365a7795a"}}

## Deployed to: www.scrippsalpha.org (Thu Oct 11 14:50:26 2018)

#### Closed PRS:

###### #9366 - Make the SEO thumb crop start as large as possible

###### Changes
 
- The SEO thumbnail crop now starts as large as possible 


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/132 

###### #9364 - Don’t optimize temporary cropped images

###### Changes
 
- Fixed error optimizing images cropped by the `assets#cropped` action 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9360 

###### #9365 - Fix Rails Cache

###### Changes
 
- Fixes physician's not showing in the dropdown of physician finder. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1343 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"3216858cf0e0d587b8e191ac1f41e0dbbbfb8f6d","commit_sha":"3d7e2088d165788a70c0712d5ed8a2eac0d0c850"}}

## Deployed to: www.scrippsalpha.org (Wed Oct 10 20:52:13 2018)

#### Closed PRS:

###### #9361 - eVariant Event Import Fixes

###### Changes
 * Import event fee * Archive events deleted in eVariant 


###### Closes:
 Tracking ticket: https://github.com/combinaut/sparkle-scripps/issues/1265 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"781b545afa72732b9832956376d63ab0856e1e00","commit_sha":"89db6b4d4a8a6d3a3b1071518bf4d1ceac7df934"}}

## Deployed to: www.scrippsalpha.org (Wed Oct 10 20:21:16 2018)

#### Closed PRS:

###### #9361 - eVariant Event Import Fixes

###### Changes
 * Import event fee * Archive events deleted in eVariant 


###### Closes:
 Tracking ticket: https://github.com/combinaut/sparkle-scripps/issues/1265 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"781b545afa72732b9832956376d63ab0856e1e00","commit_sha":"32aec12afdc6f34bf56a4f54af02c2d57132add9"}}

## Deployed to: www.scrippsalpha.org (Wed Oct 10 15:29:44 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"1ea5baae8ea1c56a001305b810bb716188a37773","commit_sha":"0041dddb78d5aedd2ff3b4b4357e4c0a5f56c792"}}

## Deployed to: www.scrippsalpha.org (Wed Oct 10 15:09:43 2018)

#### Closed PRS:

###### #9357 - Fix fall-off rate and add bounce rate

###### Changes
 We used to just do interactions / pageviews but you can have multiple interactions per page so it’s really easy to get a falloff rate of 0% if you have a couple pages where users shared them 5 times, etc. We now calculate fall-off rate as exit_pageviews / pageviews, where an exit_pageview is a pageview where there are no events after it with the same visit_id. Also, added bounce rate where a bounce is when there are no events before or after a pageview in the same session. 


###### Closes:
 Part of https://github.com/combinaut/sparkle/issues/9283 

###### #9358 - Fix explosion on metal controller pages

###### Changes
 
- Fixes 500 error on certain admin pages 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9349 

###### #9355 - Fixed asset cropping endpoint

###### Changes
 
- Fixed bug that prevent cropped images from being previewed 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9350 

###### #9305 - Sparkle scripps 1288 eliminate extra campaign redirect

###### Changes
 
- Eliminated need to redirect to the `promotions#show` action in order to service a `Source`'s short code url 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1288, https://github.com/combinaut/sparkle/issues/9310 

###### #9353 - Fix visitor count.

###### Changes
 Visitor count was wrong because I missed adding a `DISTINCT` to the count. 


###### Closes:
 Part of https://github.com/combinaut/sparkle/issues/9283 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"f08b8dd4834dfae73003d187e51b3549a8656e49","commit_sha":"12f2ca03f11ec3ec24fcb52de11fd49ff6a60159"}}

## Deployed to: www.scrippsalpha.org (Sun Oct  7 13:56:02 2018)

#### Closed PRS:

###### #9346 - Sparkle combinaut 131 fix seo thumbnail issues

###### Changes
 
- Improve open graph tests 
- Modified SEO thumbnail dimensions 


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/131 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"3d82be71127c82fd120ef0926b52b4b6ba50d81f","commit_sha":"cbe8b9f3858b16bbf6dba24d18eb86b0dbdb6171"}}

## Deployed to: www.scrippsalpha.org (Sat Oct  6 17:19:07 2018)

#### Closed PRS:

###### #9341 - 1277 md anderson header update

###### Changes
 
- Updates the MD Anderson Headless templates 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1277 

###### #9343 - Fix image grid calculations.

###### Changes
 The image grid calculates the columns based on the width of the images. We weren’t using the hi_res version of the image to calculate the width when the hi_res flag was set. We really should just let them set the number of columns that each image takes up in the grid instead of doing this crazy calculation, but that is a battle for another day. Also unified the hi_res flags that seemed to have diverged. We had `hiRes`, `hi_res` and `use_hi_res`. 


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/1332. 

###### #9325 - Add Hunt Groups to Call Center

###### Changes
 **Before Enabling Line Hunting** ![image](https://user-images.githubusercontent.com/7904/46547793-10138180-c89b-11e8-9294-09425554766a.png) **After Enabling Line Hunting** ![image](https://user-images.githubusercontent.com/7904/46499898-65925480-c7ef-11e8-8878-f004ad9e0b3a.png) 


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/464 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"07b6bd3dfdc978d8d3a570550e839d7b2c9dc4b2","commit_sha":"3a57c31423a5f07f78b7045ea5102e81a807e5d2"}}

## Deployed to: www.scrippsalpha.org (Fri Oct  5 20:11:06 2018)

#### Closed PRS:

###### #9327 - Combinaut 9283 event graph

###### Changes
 Event chart colors will shift up and down in shades if placed next to each other ![screen shot 2018-10-02 at 12 00 52 pm](https://user-images.githubusercontent.com/2073148/46379247-32738800-c66c-11e8-8e7b-b01b1f60fb1b.png) If the Y axis is forced to show float numbers hide those numbers. Also when showing more 20 but less 31 x labels change the font size. Note that over 31 days we switch x-axis labels to just months, not month and day ![screen shot 2018-10-02 at 11 13 30 am](https://user-images.githubusercontent.com/2073148/46379322-6babf800-c66c-11e8-9e30-0b7c2759256b.png) For the event graph if the tooltip overflows on the left or right then we push the tooltip to start at the graphs value x point. ![screen shot 2018-10-02 at 6 04 44 pm](https://user-images.githubusercontent.com/2073148/46379738-c4c85b80-c66d-11e8-90df-f3f2bac50358.png) As well various CSS and JS updates and cleanup 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9283 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"a0ccdada1ecc827967f6931916c930ff671a1cb8","commit_sha":"cecfb7dc84379e8b6a61df863ad52cd25c289c1d"}}

## Deployed to: www.scrippsalpha.org (Fri Oct  5 18:01:06 2018)

#### Closed PRS:

###### #9340 - Add tracking pixel interpolation

###### Changes
 Tracking pixels can now provide a special interpolation syntax (`


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/1253 

###### #9338 - Fix bug that caused physician count to be wrong

###### Changes
 
- Fix bug that caused physician count to be wrong when searching by a parent specialty where the physician had multiple descendant specialties 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9335 

###### #9332 - Don’t try to render vanity path fields when the model doesn’t have SEO fields

###### Changes
 Some models (like CreativeMap) don’t have `public_path` and explode when rendering these fields. Since they don’t have SEO behaviour, there is no reason to render them anyhow. 


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/9331. 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"9ccaca4d679d3cd07ed421b89d8fbfd4b4811c2c","commit_sha":"3571c2a16aa825a6d9c9de06c5fde3b1fcd085c8"}}

## Deployed to: www.scrippsalpha.org (Thu Oct  4 16:27:17 2018)

#### Closed PRS:

###### #9333 - 1317 add callout to qualcomm

###### Changes
 
- Adds Callout to Section with Image in Qualcomm 
- Fixes callout from changing styles in page builder when a component with a callout is active. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1331, https://github.com/combinaut/sparkle-scripps/issues/1317 

###### #9334 - Update doctor ranks in both databases

###### Changes
 
- Update doctor ranks in both databases 


###### Closes:
 Unreported 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"83c059ff353ff5cbb33326c3893f03f51da4d3f0","commit_sha":"c4ec9d723ad14cace3839a4224e26ef5f00c56ad"}}

## Deployed to: www.scrippsalpha.org (Wed Oct  3 01:53:18 2018)

#### Closed PRS:

###### #9330 - Enable creative map for qualcomm.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/1322. 

###### #9329 - Removes Location 171 from the Physician Import mapper

###### Changes
 
- Location 171 used to be a Clinic (Hillcrest Clinic), and has since changed to a specialty center, the team does not want this visible in the dropdown. 
- removes location 171 (now know as MD Anderson). 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1325, https://github.com/combinaut/sparkle-scripps/issues/1300 

###### #9328 - Remove Archived Concern in Routes

###### Changes
 
- no longer show archived items on the front end. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1327 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"2e9aa04b1b9f7bfe3322550c091bd3ff744b60b2","commit_sha":"8ed16d393e9480185990dcc6216df59c161029af"}}

## Deployed to: www.scrippsalpha.org (Tue Oct  2 22:55:33 2018)

#### Closed PRS:

###### #9326 - Increased Physician boost for video present

###### Changes
 
- Increased Physician ranking boost for having a video so it is equal to image boost 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1148 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"10fd6c97ac2c10ca234ec17ff302605f8b2dc5c2","commit_sha":"67faf9d65c9322412ccdbea428092f5748e1557f"}}

## Deployed to: www.scrippsalpha.org (Tue Oct  2 20:12:36 2018)

#### Closed PRS:

###### #9323 - Adds Accepting new Patients Info

###### Changes
 
- informs users that a physician is accepting new patients in the dr finder. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1237 

###### #9324 - Don’t inherit field unless source field exists

###### Changes
 
- Fix error message when editing home page 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1326 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"641e4e7be7b484a2d8e789b6273a57c76798ec43","commit_sha":"188ebdefee39239a44135e566b1c5a20aaa264a8"}}

## Deployed to: www.scrippsalpha.org (Mon Oct  1 23:16:00 2018)

#### Closed PRS:

###### #9322 - Fixes Comments not being editable

###### Changes
 
- Makes it so users can edit their own comments in the feedback pane. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1304 

###### #9321 - Qualcomm Interstitial Template Margins

###### Changes
 
- on the cobranded template of qualcomm interstitial, I have updated the margins to match scripps. 
- Cobranded interstitial template on scripps and on qualcomm will look the same on both domains. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1316 

###### #9315 - Don’t show persistent review sessions from another pub domain.

###### Changes
No Changes included in the log


###### Closes:
 Related to https://github.com/combinaut/sparkle-scripps/issues/1301. 

###### #9320 - Updates the white logo of md-anderserson

###### Changes
 
- based on the requirements of md anderson the slash through Cancer must be red. 


###### Closes:
 [unreported] 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"d8814b9e067cb7645d4e41423d57222c97d39581","commit_sha":"8a5861529f21c580b2a2a97d74539f946132506c"}}

## Deployed to: www.scrippsalpha.org (Mon Oct  1 22:26:10 2018)

#### Closed PRS:

###### #9321 - Qualcomm Interstitial Template Margins

###### Changes
 
- on the cobranded template of qualcomm interstitial, I have updated the margins to match scripps. 
- Cobranded interstitial template on scripps and on qualcomm will look the same on both domains. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1316 

###### #9315 - Don’t show persistent review sessions from another pub domain.

###### Changes
No Changes included in the log


###### Closes:
 Related to https://github.com/combinaut/sparkle-scripps/issues/1301. 

###### #9320 - Updates the white logo of md-anderserson

###### Changes
 
- based on the requirements of md anderson the slash through Cancer must be red. 


###### Closes:
 [unreported] 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"d8814b9e067cb7645d4e41423d57222c97d39581","commit_sha":"33bd5937ede1a5fc207fcbe54d36f2c1249971b4"}}

## Deployed to: www.scrippsalpha.org (Mon Oct  1 20:03:10 2018)

#### Closed PRS:

###### #9318 - Fixes Microsite header

###### Changes
 
- Prevents logo from being cut off 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1315 

###### #9319 - Scripps 1298 tab args

###### Changes
 
- Removes Report tabs behavior of replacing the state. 
- On init, each tab group will look within themselves to see if they have a selected tab, if there is none then we select the first one. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1298 

###### #9316 - Sparkle scripps 1293

###### Changes
 
- SEO Thumbnail editor now shows default image from page content ![image](https://user-images.githubusercontent.com/87623/46236892-f2439b00-c335-11e8-9800-f1630355f7db.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1293 

###### #9308 - Add ability to specify Fallback Call Centers

###### Changes
 **See [Call Center Fallback.pptx](https://github.com/combinaut/sparkle/files/2429480/Call.Center.Fallback.pptx) for screenshots.** * Admins can specify a fallback call center for a call center. * When phone is not answered at the call center, call is directed to the phone number of the fallback call center * Whisper and in-progress call selector show whispers/calls from call centers that fall back to the current one. 


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/459 

###### #9288 - Fix page cache prevents POST requests.

###### Changes
 When there was a page cache file at a certain location, nginx would throw a 405 error when there was a POST request to that URL. We now forward the request to passenger for processing. 


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/458. 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"9bc9a5185a5c9f8a2988a2dcdcfcc6f0419cffc1","commit_sha":"6f68033e6b0125a521179881e4926941631b048d"}}

## Deployed to: www.scrippsalpha.org (Fri Sep 28 22:38:03 2018)

#### Closed PRS:

###### #9314 - Moves Program up to in the dr finder dropdown

###### Changes
 
- per convo with sukrit, they want the Programs to be at the top of the Dropdown List Items. 


###### Closes:
 [unreported] 

###### #9312 - Release scripps 1294 qualcomm

###### Changes
 
- When in Page builder when active-editing is enabled. We place a white ::before element on the body that covers the whole viewable frame. This is to simulate the default background of a browser incase one has not been set on a the template. 
- Adds a white background to interstitial on qualcomm for coverage 
- Adds modal CTA support on interstital templates ![screen shot 2018-09-28 at 3 02 24 pm](https://user-images.githubusercontent.com/2073148/46228300-ab52a700-c32f-11e8-8b67-b9481750fb52.png) ![screen shot 2018-09-28 at 3 02 13 pm](https://user-images.githubusercontent.com/2073148/46228301-ab52a700-c32f-11e8-8604-3b4d3c85ebce.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1294 

###### #9311 - Sparkle scripps 1293

###### Changes
 
- SEO analysis now updates when changing the title, summary, or url from the "General Settings" fieldset 
- Fixed bug where updating the Google snippet would cause a JS exception 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1295, https://github.com/combinaut/sparkle-combinaut/issues/127 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"a5d1785a472e402b9f042ad98b72a7c7af0c8605","commit_sha":"5e343e0978983f79a6180455426869bd662366c5"}}

## Deployed to: www.scrippsalpha.org (Fri Sep 28 15:58:49 2018)

#### Closed PRS:

###### #9309 - Fix the MD Anderson Badge in mobile

###### Changes
 
- enlarge the MD Anderson badge. 
- make the ratings look the same in mobile as in desktop. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1140 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"50c3365374d0e74f99f81f820e5cfea1f2d46531","commit_sha":"3eadac003b60c5cea974a03ffc9cbb7541d48a19"}}

## Deployed to: www.scrippsalpha.org (Thu Sep 27 21:35:41 2018)

#### Closed PRS:

###### #9307 - Interstitial template on Qualcomm

###### Changes
 
- creates an interstitial template on Qualcomm 
- fixes issues with css code with where rules were placed 
- removes mobile fixed header for an interstitial template on Qualcomm ![screen shot 2018-09-27 at 1 58 16 pm](https://user-images.githubusercontent.com/2073148/46165172-fb613900-c25d-11e8-9f88-8dc6d8fdba35.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1268 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"926c8679ecd8d49582c1fbb6961cbfee1e5dfbd7","commit_sha":"d12aa5e1e451e33c763f0d1adc0ee9c787471654"}}

## Deployed to: www.scrippsalpha.org (Thu Sep 27 20:49:35 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"49fc5d3051323cfafb138fd7ea1e773174f5e113","commit_sha":"039588b3111c2aec76a38ab9f658ff9b8312bd92"}}

## Deployed to: www.scrippsalpha.org (Thu Sep 27 18:03:35 2018)

#### Closed PRS:

###### #9304 - 1284 mda search filter

###### Changes
 
- Allows users to filter by `Program`(category) in Dr Finder. 
- Able to scope searches by `Program` url `/physicians?category_scope=


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1289 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"58abe82e6e69fd32848cb324b4e477271a75a1bf","commit_sha":"fba6e2c937cb08c44e9b1e70c73c3f0b4cfbb9ca"}}

## Deployed to: www.scrippsalpha.org (Thu Sep 27 15:12:03 2018)

#### Closed PRS:

###### #9306 - Icon sizing issue

###### Changes
 
- From testing, depending on the size and ratio of the SVG the error can appear. 2em’s equals to 26px in this context, at this size the SVG is trying to map to a virtual grid of 320px x 320px. The assumption I’m making here is that in this calculation the SVG is printing to a pixel that doesn’t exist/is impossible to fill. Droping the size 1px fixes this issue ![screen shot 2018-09-27 at 10 42 43 am](https://user-images.githubusercontent.com/2073148/46153937-1756e180-c242-11e8-943a-2b32c498ec75.png) ![mopixelsmoproblems](https://user-images.githubusercontent.com/2073148/46153707-aa434c00-c241-11e8-858a-67fd94e87c4e.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1278 

###### #9258 - Combinaut 120 reporting frontend

###### Changes
 
- Creates the frontend of the new reporting system 
- Changes to the graphs to be more interactive and visually appealing 
- Latest screenshots will be in the comments ![graphs](https://user-images.githubusercontent.com/2073148/45454499-21110e80-b6b2-11e8-96c1-07ebd4d3d9b7.gif) 


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/120 

###### #9269 - Sparkle scripps 1242 add facebook seo metadata editor

###### Changes
 
- Facebook SEO platform thumbnail can be selected ![image](https://user-images.githubusercontent.com/87623/45911447-41cf1780-bdc8-11e8-9f8c-d69b20e2b093.png) ![image](https://user-images.githubusercontent.com/87623/46047691-e8722b80-c0da-11e8-99d0-0db0bc54eb37.png) ![image](https://user-images.githubusercontent.com/87623/46047712-faec6500-c0da-11e8-9e6e-b7aaded04cc8.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1242 

###### #9303 - Improved campaign load speed

###### Changes
 
- Allow campaign subdomain to use action cache 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1288 

###### #9302 - Fix compassus zip code search.

###### Changes
 Slugs need to be globbed since they now contain slashes. Also fixes undefined showing on no results screen when there is no findClosest button. ![image](https://user-images.githubusercontent.com/7904/46107451-67ce3080-c1a9-11e8-8444-c98864ef85b9.png) 


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/461. 

###### #9300 - Fix broken SEO CSS

###### Changes
 
- Fix broken CSS in SEO snippet modal 


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/126 

###### #9299 - Fix 500 error mobile optimized template.

###### Changes
 Not all types of resources have a `phone` method (e.g. Page). 


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/9298. 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"cd2cd4ee78b90620a816fb1d8bba504b9ad24d38","commit_sha":"7958bc46b0f8cc90cdb99fec54a238fa47ac194c"}}

## Deployed to: www.scrippsalpha.org (Tue Sep 25 16:57:31 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"e725deac8f2fac124d6d5e5cf6a8d3d1e7e9e46b","commit_sha":"39cbb533e3868338baf35b5f2c15e88166916008"}}

## Deployed to: www.scrippsalpha.org (Fri Sep 21 05:41:50 2018)

#### Closed PRS:

###### #9279 - Fixes image cropper ratio not being set correctly

###### Changes
 
- Fixes crop ratios not setting correctly when a new ratio is selected. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1267 

###### #9277 - Updates print styles

###### Changes
 
- updates the print styles based on ticket feedback 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1196 

###### #9276 - Sets a default for promotion layout name

###### Changes
 
- Allows a nil layout_name to be used in creative map import. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1164 

###### #9274 - Sparkle scripps 1261 remove sandbox check from component data inheritance

###### Changes
 
- Fix 500 error in background tasks that didn't set Sandbox state 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1261 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"bc6aca50eac82c7fd475762e1575aa0b8da4d7a6","commit_sha":"4cb4c0e6b927bdfce8c07b198ade69f1ba9c1f8f"}}

## Deployed to: www.scrippsalpha.org (Fri Sep 21 05:31:35 2018)

#### Closed PRS:

###### #9279 - Fixes image cropper ratio not being set correctly

###### Changes
 
- Fixes crop ratios not setting correctly when a new ratio is selected. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1267 

###### #9277 - Updates print styles

###### Changes
 
- updates the print styles based on ticket feedback 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1196 

###### #9276 - Sets a default for promotion layout name

###### Changes
 
- Allows a nil layout_name to be used in creative map import. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1164 

###### #9274 - Sparkle scripps 1261 remove sandbox check from component data inheritance

###### Changes
 
- Fix 500 error in background tasks that didn't set Sandbox state 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1261 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"bc6aca50eac82c7fd475762e1575aa0b8da4d7a6","commit_sha":"81b8ad7a144b7c79e74ff61417879fb46211f902"}}

## Deployed to: www.scrippsalpha.org (Sat Sep 15 00:02:25 2018)

#### Closed PRS:

###### #9265 - Update the link dialog url

###### Changes
 
- fix wrong domain created in link dialog causing 404s for the user. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/997 

###### #9264 - Fixes placement of search icon

###### Changes
 
- fixes placement of search icon in mobile view. 


###### Closes:
 [Unreported] 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"96ad73318d7f9ef51fcf880545542c50bd52e65f","commit_sha":"225e0499a52162ff19a1000d5a910d8252a1392c"}}

## Deployed to: www.scrippsalpha.org (Fri Sep 14 18:33:59 2018)

#### Closed PRS:

###### #9263 - Remove mobile_cta from combinaut www

###### Changes
 
- we don’t have sidebar ctas that, nor do we use this functionality in combinaut. 
- remove mobile cta functionanlity from combinaut (js/css). 


###### Closes:
 [Unreported] 

###### #9262 - Fixes error made in PR

###### Changes
 
- The mobile JS should have gone in to `www` domain not `sparkle`. This is based on which domain the `mobile_cta` css was in 


###### Closes:
 *Comma separated list of closed issue links* 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"a038643171135c564f0e59330c78a5d9c8b1fcfb","commit_sha":"34c79cda9fc419f92d7939cef02cb7a4db88732c"}}

## Deployed to: www.scrippsalpha.org (Fri Sep 14 17:19:42 2018)

#### Closed PRS:

###### #9261 - Only include the mobile cta js on domains that use it

###### Changes
 
- Fix `x` appearing in bottom of aco 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1151 

###### #9249 - Sparkle 1174 valid inputs

###### Changes
 
- This will remove the scripts that look for errors in the setttings_navigation controller and moves them into their own script for definition lists. These changes are to both separate out concerns from settings navigation as well as to improve stability 
- Inserts new JS class anytime a definition list is called. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1174, https://github.com/combinaut/sparkle/issues/9253 

###### #9255 - Adds seeds to revert PR 9165

###### Changes
 
- Restores entity_services featured state to what it was on Aug. 26th 2018. 
- Restores business logic to only show featured entity services on a location index page. 
- Reverts PRS #9165 and #9248 


###### Closes:
 Unreported 

###### #9239 - 1132 surface associated physicians on locations

###### Changes
 
- show which physicians are associated to locations. This is needed for when a location needs to be unpublished, there can be no linked physicians. 
- updates text to clarify why a location is locked. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1132, https://github.com/combinaut/sparkle-compassus/issues/448 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"2042f7cfc3cea5b2c91569dd44345ada082d651e","commit_sha":"5c0d969bf61e79e125dae59d37eb35106a2d9552"}}

## Deployed to: www.scrippsalpha.org (Tue Sep 11 23:56:28 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"805a2ffe314563274270efec6129aedc9ec3f3ec","commit_sha":"8b93c575fb744e51dcc5a8ead41b3b6a60c471f1"}}

## Deployed to: www.scrippsalpha.org (Sat Sep  1 01:44:17 2018)

#### Closed PRS:

###### #9202 - Fix inheritance metadata explosion

###### Changes
 
- Fixed error when rendering certain pages on the live database 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9201 

###### #9200 - Fix bug where we cleared all classes when toggling

###### Changes
 
- Fix bug where the component info popup would change style on ever click of the interface 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1202 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"5334a97ec4a0a6a49419533781fe8023f4d82266","commit_sha":"0ac52f4a33a7a176fcd25cff977fae6ef4760c08"}}

## Deployed to: www.scrippsalpha.org (Fri Aug 31 22:38:50 2018)

#### Closed PRS:

###### #9199 - Skip preheating publishing domains that don’t want

###### Changes
 
- Fixed bug where we tried to preheat cache of publishing domains that didn't specify any preheat config 


###### Closes:
 Unreported 

###### #9198 - Sparkle scripps 1198 initialize seo results asap

###### Changes
 
- SEO analysis is performed immediately so Settings Navigation counter shows on page load 
- Fixed SEO placeholder not showing when title had been cleared 
- Fixed Settings Navigation notification counts not incrementing and decrementing correctly 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1198, https://github.com/combinaut/sparkle-scripps/issues/1203 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"103b0ace850b73b92a824e30a5b41dde4e9920eb","commit_sha":"79a79b867568db595ef435c19b51629b38c357d0"}}

## Deployed to: www.scrippsalpha.org (Fri Aug 31 21:24:38 2018)

#### Closed PRS:

###### #9196 - Update to latest ancestry to fix deprecation warnings

###### Changes
 
- Update to latest ancestry to fix deprecation warnings 


###### Closes:
 Unreported 

###### #9190 - Enable action caching fallback

###### Changes
 
- Don't request variants on mobile app 
- Fall back to action caching if page caching is inappropriate for a cacheable page 
- Preheat transplant app pages after cache is cleared 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1189 

###### #9197 - Don’t use <p> for non-content.

###### Changes
 Otherwise Yoast analyzes the content incorrectly. Still looks the same as far as I can tell: ![image](https://user-images.githubusercontent.com/7904/44935136-86254580-ad3d-11e8-965b-03a87f916262.png) 


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/1199. 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"c9c2bf8e4e90d9d3c95dadfe7fa2e1eb60501ca0","commit_sha":"ca02b020d992aeaa469c28295a6773581d947483"}}

## Deployed to: www.scrippsalpha.org (Fri Aug 31 19:53:57 2018)

#### Closed PRS:

###### #9195 - Don’t analyze script tags.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/1197. 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"ce9a96fca0425d700e5a322e7cf11dd782ef93bd","commit_sha":"b92387fd73a10bf786dcf6154ec87ba34f463853"}}

## Deployed to: www.scrippsalpha.org (Fri Aug 31 02:16:28 2018)

#### Closed PRS:

###### #9192 - Sparkle 9189 settings feedback

###### Changes
 
- Next button should be fixed now 
- Max width set on all form fields (will get smaller if pushed) 
- Fixing where and when scrollbars show up on the page 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9189 

###### #9193 - Fixes the data table overflow for creative maps

###### Changes
 
- Fixes creative map data display issues. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1125 

###### #9187 - 1113 improve printing css dr finder

###### Changes
 
- Improve the way our print css looks. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1113 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"fc482c3b5e0544d987d90b16cdcaae08e8ee7e3a","commit_sha":"ee0fd7e083c29f4b7ce9558c1e3e868c112e588c"}}

## Deployed to: www.scrippsalpha.org (Thu Aug 30 20:03:05 2018)

#### Closed PRS:

###### #9188 - Fix entity service seo

###### Changes
 
- Fixed bug that prevented SEO fields from working on `EntityServices` that did not customize their own components. A record that doesn't have a page builder will disable content analysis checks but still allow snippet analysis. ![image](https://user-images.githubusercontent.com/87623/44834219-5531fd00-abe5-11e8-8e6a-6b3564933f71.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1192 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"f3783a9cf7238a717afa57a8d4d2b7e32bd28c0b","commit_sha":"2114324de90e12baba4c7df7af4549ad77a97392"}}

## Deployed to: www.scrippsalpha.org (Wed Aug 29 22:41:51 2018)

#### Closed PRS:

###### #9184 - Limit variant detection time

###### Changes
 
- Limited variant detection time to 1 second, at which point the original page will be shown 


###### Closes:
 Unreported 

###### #9185 - Combinaut 110 Settings footer 

###### Changes
 
- The following changes bring the settings page up to mockups that Justin describes in https://github.com/combinaut/sparkle-combinaut/issues/110 
- Next setting button is now a pill rather than a whole section across the bottom 
- Arrow buttons resized 
- User Avatar resized as well to match ![screen shot 2018-08-29 at 5 06 15 pm](https://user-images.githubusercontent.com/2073148/44815632-09179600-abae-11e8-8dd2-a57e7f68269a.png) 


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/110 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"8f15c40db1451b2e67051b2013e2486d1d0ac509","commit_sha":"92da8e4cb062e20e50176ff06a1579c57b91bb63"}}

## Deployed to: www.scrippsalpha.org (Wed Aug 29 21:39:17 2018)

#### Closed PRS:

###### #9186 - Allow ScrippsAlpha to submit to the sandbox instance of Salesforce

###### Changes
 Remove the Provider NPI fields. The new version of Salesforce doesn’t have these fields. 


###### Closes:
 Unreported 

###### #9119 - Simplify variants

###### Changes
 
- Begin simplifying the variants extend 
- create mixins and include them in the components. 
- makes it easier to find/identify different variants on components. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1144, https://github.com/combinaut/sparkle-scripps/issues/834 

###### #9183 - Sparkle scripps 879 fix message table styling

###### Changes
 
- Cleaned up Messages index page styling 
- Sync Status indicators are no longer shown for records that only live in the sandbox database 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/879 

###### #9179 - Sparkle scripps 1184 fix doctor finder directions

###### Changes
 
- Fixed bug that prevented doctor finder map and directions links from working 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1184 

###### #9167 - Sparkle scripps 1167 increase proximity weighting

###### Changes
 
- Decreased weight of having an profile photo in physician search results 
- Increased weight of proximity at close distances in physician search results 
- Increased weight of proximity when the user explicitly specifies a location in physician search 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1167 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"9450b9feb0d4d930d410acff18f337851813d1fd","commit_sha":"a4e5610321f5a9c9ab4ff20b53a64a3f8a905393"}}

## Deployed to: www.scrippsalpha.org (Wed Aug 29 16:49:08 2018)

#### Closed PRS:

###### #9151 - Combinaut 106 seo automatically the first keyword

###### Changes
 
- When the first keyword gets added it becomes the focus keyword 
- When the user removes a number of keywords till only one remains that keyword will become the focus keyword 
- Edits events handlers in the SEO fieldset manager to better handle addition/removal of keywords from a parent level perspective. (These events are triggered by child keyword class) ![keywordchanges](https://user-images.githubusercontent.com/2073148/44538043-3f48a780-a6ce-11e8-8e97-97c141d15330.png) 


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/106 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"4998ca3ca54c0509a6db335d070d3f2edd7adcbf","commit_sha":"4a9ad89e040aed64795f08dd63c0270043236e24"}}

## Deployed to: www.scrippsalpha.org (Wed Aug 29 14:36:45 2018)

#### Closed PRS:

###### #9181 - Fix ClinicalTrial description rendering

###### Changes
 
- Fix bug where `ClinicalTrial` descriptions rendered escaped HTML characters 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1179 

###### #9180 - Sparkle scripps 1180 fix modals re adding settings nav

###### Changes
 
- Fixed bug that caused "edit settings" page navigation to load when a new child page was added 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1180 

###### #9178 - Sparkle scripps 1145 fix seo field manager on add to list pages

###### Changes
 
- Fixed bug where SEO page settings JS would error if in an `adding_to_list?` context 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1145 

###### #9176 - Set a max width for the non-expandable search box

###### Changes
 
- Search box will only grow to a maximum of 400px while filling the available menu bar space ![image](https://user-images.githubusercontent.com/87623/44751811-02195680-aace-11e8-8bcd-fb6be1163555.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1182 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"e235e615e94886992c8471b71c948af5c94de969","commit_sha":"bb9c553a7bcb55a8387799fe5b5977505227413d"}}

## Deployed to: www.scrippsalpha.org (Tue Aug 28 21:07:13 2018)

#### Closed PRS:

###### #9168 - Scripps 1171 Modal Form Error Checking

###### Changes
 
- New item modals will only display form validation error state after a form has been submitted by the user 
- Creates an escape method on Wizard modals to stop the completion/hiding of a modal 
- new action modal will check the validity of the form before the complete action can run. If the form fails we escape the complete action. ![validating](https://user-images.githubusercontent.com/2073148/44671123-93b39600-a9f2-11e8-9040-d265aee49c1d.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1171 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"206f0a122f73ccea71b7e071bf0d55c625b037e1","commit_sha":"d361d2451ccabb7fc28ff3b2b9b4b3056111a7f2"}}

## Deployed to: www.scrippsalpha.org (Tue Aug 28 20:11:42 2018)

#### Closed PRS:

###### #9126 - Settings next nav button

###### Changes
 
- Fixes position of next setting buttons to the bottom of the screen 
- Adds a 'band' around the button to make it appear separate from the content. 
- the footer is removed if there is no next setting ![bottom section](https://user-images.githubusercontent.com/2073148/44221490-ae168580-a14f-11e8-8a3c-47eb62419752.png) 


###### Closes:
 unreported 

###### #9118 - Compassus 446 locations redesign

###### Changes
 
- Adds a template for Compassus to use that is more optimized for mobile 
- Creates a button component for adding trackable phone numbers 
- reorganizes layout to match comps available here https://app.zeplin.io/project/58af884140d8fabd9273df52/screen/5b58e242a1987c122c0425c7 
- style to match comps as well note as of writing this is still WIP please see the comments for most up to date screenshot ![screen shot 2018-08-13 at 6 04 01 pm](https://user-images.githubusercontent.com/2073148/44060768-bf73e170-9f23-11e8-9f1b-4715127f7c4c.png) 


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/446 

###### #9173 - Don’t notify users with completed reviews of new comments.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/1134. 

###### #9169 - Update slug aliases when updating a parent slug.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/1175. 

###### #9172 - Retain physician finder page when changing views

###### Changes
 
- Physician finder page is retained when switching between bio/map views 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1152 

###### #9170 - Sparkle scripps 1176 fix app content undiscoverable init

###### Changes
 
- Mobile app content pages no longer allow toggling of undiscoverable, they are always undiscoverable. ![image](https://user-images.githubusercontent.com/87623/44688145-290d5500-aa08-11e8-859d-3c9619c96501.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1176 

###### #9146 - Allow Salesforce::FormProcessor to sanitize values

###### Changes
 
- Fixed issue where Salesforce would reject malformed form submissions 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9145 

###### #9165 - Creates seed to unfeature location services

###### Changes
 
- unfeatures all location services that are not connected to Scripps Clinic 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1157 

###### #9164 - 9001 missing preview path method

###### Changes
 
- Fixes edit page of answers. 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9001 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"3570c7efbf0ca448120a0966ded465b1ddd89524","commit_sha":"a3c97017868894fac1437cb969281506b1314654"}}

## Deployed to: www.scrippsalpha.org (Fri Aug 24 23:34:12 2018)

#### Closed PRS:

###### #9163 - Don’t recommend other youtube videos

###### Changes
 
- Don’t show related youtube videos after a physician's video finishes playing 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1156 

###### #9154 - Sparkle scripps 1160

###### Changes
 
- Fixed a bug where an `EntityService` sync warnings didn't appear 
- Prevent errors on variant requests from replacing the original page with an error page 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1160 

###### #9162 - Adds an Error Page Partial

###### Changes
 
- Fixes 404 error in scripps alpha sitewide_search. 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9130 

###### #9159 - Ensure promotion target matches microsite path

###### Changes
 
- Fixed bug where promotion layout wouldn't apply to underlying page if the user didn't add a leading slash on the hardcoded target 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1163 

###### #9161 - Scripps 1171 modal errors focus

###### Changes
 
- Benefiting from some changes to the settings redesign, modals instantiate `settingsNavigationController` which provides us some form validation methods that get applied. @njakobsen The reason for how these modals start up `settingsNavigationController` doesn't make sense to me as the only place it should be run is on `app/views/admin/metal/_edit_settings.html.erb`. which this shouldn't be getting? 
- Changes the CSS to use our invalid class 
- Changes some JS ordering so focusing on the first input will work when the modal loads. ![valid](https://user-images.githubusercontent.com/2073148/44607032-0e936b80-a7bd-11e8-84d7-1e0ceafbcd46.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1171 

###### #9155 - Fix bug that prevented admin search type change

###### Changes
 
- Fix bug that prevented admin search type change 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1173 

###### #9158 - Fix extra space when link mixed with text.

###### Changes
 
- Removes extra whitespace that is present when there is a link + text in wysiwyg bulleted lists. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1098 

###### #9156 - Removes dotted line under addresses abbr

###### Changes
 
- removes dotted line under address abbr. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1172 

###### #9143 - Sorts medical services alphabetically

###### Changes
 
- Removes any orders before sorting alphabetically. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1155 

###### #9147 - Ordering targets

###### Changes
 
- Changes Target Resource link for tracked calls to show scoped collection instead 
- Adds sorting by Target resource Note: The sorting is rather primitive, it sorts resources by how recently they were created. Alphabetic sorting would require a bit more of rejiggering 


###### Closes:
 combinaut/sparkle-compassus#449 

###### #9142 - Move partials shared by base/metal controllers

###### Changes
 
- fixes error where it exploded when trying to access `/admin/search/settings` 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9128 

###### #9149 - 1159 500 when exporting tracked calls

###### Changes
 
- Fixes the timeout error (500) that was happening when trying to dl tracking_calls csv. 
- Optimize so it is much faster to dlo the csv. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1159 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"09f59f3e302c1fb975c333da2660162c4304b8a7","commit_sha":"e801b96cca29e655b5a8429dc6123f86eb839335"}}

## Deployed to: www.scrippsalpha.org (Thu Aug 23 09:11:32 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"221e35e449b052214af1e90f913ad584872f94d4","commit_sha":"221e35e449b052214af1e90f913ad584872f94d4"}}

## Deployed to: www.scrippsalpha.org (Wed Aug 22 23:10:43 2018)

#### Closed PRS:

###### #9148 - Sparkle scripps 948 fix physician seo field defaults

###### Changes
 
- Fixed bug where default physician SEO title did not appear 
- Fixed bug where default SEO description (generated from page content) did not appear when the SEO description was blank 
- You can now click on the SEO Snippet content to show the edit modal 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/948 

###### #9144 - Sparkle combinaut 103 fix seo field defaults

###### Changes
 
- Fixed bug where leaving an SEO snippet blank could save the default values instead 
- Fixed bug where cancelling the SEO snippet modal would still apply the changes 


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/103 

###### #9136 - Add the font-size to body

###### Changes
 
- Applies a base font size for each domain. Unifies the fonts in wysiwyg 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1062 

###### #9138 - Transplant app Prevents zooming on forms

###### Changes
 
- Should prevent zooming in on forms in iOS app ![simulator screen shot 
- iphone x 
- 2018-08-20 at 14 20 50](https://user-images.githubusercontent.com/2073148/44358978-8b081080-a484-11e8-8a9d-62351d7e1f01.png) 


###### Closes:
 unreported 

###### #9139 - Hotfix bug in mobile app that prevents form submit

###### Changes
 
- Hotfixed bug in mobile app that prevents form submission 


###### Closes:
 Unreported 

###### #9137 - Transplant app Submit buttons will now be 100% on mobile 

###### Changes
 
- has a breakpoint to switch from 100% on phone size to the normal desktop width on tablet see screenshots 
- 
- ![screen shot 2018-08-17 at 5 59 56 pm](https://user-images.githubusercontent.com/2073148/44290635-98848700-a247-11e8-86dc-e7ba977ceb42.png) ![screen shot 2018-08-17 at 5 59 48 pm](https://user-images.githubusercontent.com/2073148/44290636-98848700-a247-11e8-92b4-6d721195a80f.png) 


###### Closes:
 unreported 

###### #9135 - Transplantapp 1150 padding

###### Changes
 
- There are some things that are happening here that I can't resolve or test properly because my view and browser are different from where the end product is. Some of the issues as well seem to come from the app and not anything css is doing or has control over. 
- @jbraem The circle on the icon is in the image there. I have told css to punch up the sharpness but maybe double check the source files on an iPhone? 
- Below is my preview just not since this isn't running on device this is an approximation of what it should look like. I've added the header in post. ![screen shot 2018-08-17 at 3 25 51 pm](https://user-images.githubusercontent.com/2073148/44285104-03c35e80-a232-11e8-9f4a-985e6fedffeb.png) Chase should look at: 
- Header and footer backgrounds should be white 
- Pages shouldn't scroll unless they have overflow content, For this one everything css wise is telling me the page is only the height of the content. I think this could be coming from the app maybe? ![screen shot 2018-08-17 at 3 18 45 pm](https://user-images.githubusercontent.com/2073148/44284808-007ba300-a231-11e8-8c84-c61187805357.png) 


###### Closes:
 *Comma separated list of closed issue links* 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"91cdffa514c40c429e7c20e6b7b1daa804465eeb","commit_sha":"efa16031179226de8be59481c3e92a7961d233fc"}}

## Deployed to: www.scrippsalpha.org (Thu Aug 16 19:56:11 2018)

#### Closed PRS:

###### #9127 - Makes Byline avatar optional

###### Changes
 
- Fixes issue if the avatar is not present 
- 
- ![screen shot 2018-08-16 at 1 16 13 pm](https://user-images.githubusercontent.com/2073148/44223867-d786df80-a156-11e8-80b0-f9fd44a036d3.png) 


###### Closes:
 unreported 

###### #9125 - Combinaut 100 settings requested changes

###### Changes
 
- Sets settings fields to have a max-width of 1000px 
- Creates an association area in the settings nav. association pages will be grouped under this. 
- Fixes JS to avoid errors caused by adding a header to the settings navigation list 
- Removes Facebook from SEO area ![changes](https://user-images.githubusercontent.com/2073148/44162510-97f4c080-a08e-11e8-8941-996ef0af725b.png) 


###### Closes:
 *Comma separated list of closed issue links* 

###### #9124 - 1117 unscope events associations

###### Changes
 
- Allows events to be scoped/unscoped (like news items). 
- Fixes text for `view_all` on unscoped affiliations 
- removes special handling for homepage. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1139, https://github.com/combinaut/sparkle-scripps/issues/1117 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"64829c31beebc3a828e1023d6ccfb97bd719fcb2","commit_sha":"2ee1eb805a369101cc7873a339f3f80bde886152"}}

## Deployed to: www.scrippsalpha.org (Tue Aug 14 20:49:07 2018)

#### Closed PRS:

###### #9123 - Fix link to missing content confirmation exploding.

###### Changes
 the existing `links_to_missing_content` method seems to be a cut-paste error because it didn’t return missing content links. 


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/9121. 

###### #9064 - 1093 allow internal pages to trigger targeting

###### Changes
 
- CTAs can be used for targeting on any page, not just entry pages, on a per-CTA basis ![image](https://user-images.githubusercontent.com/87623/43997630-a62aba02-9d95-11e8-9e51-8352e0d73b82.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1093 

###### #9117 - Fixes Padding Below Image

###### Changes
 
- The issue was that the margins added up to trick the side text into thinking it should be included as side content not fall below. This added extra/unexpected spacing. 
- This issue can still crop up when an image is the exact pixel amount for the text to stay on the side rather than fall below, however, we have fixed it so that it works for the auto sizes in the cropper (landscape, panorama) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1135 

###### #9116 - Remove text from Physician Recommender

###### Changes
 
- the text for `Doctors` should be hidden. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1084 

###### #9109 - Link resources in report

###### Changes
 
- links resources to report tab for the corresponding page, which makes drilling down a little easier. 
- also adds title attribute to link that shows the full URL. Especially helpful for 404s, which are currently tracked but listed by page title 


###### Closes:
 Unreported 

###### #9113 - Sparkle combinaut 101 fix seo field init

###### Changes
 
- Fix bug that caused SEO fields not to initialize correctly 


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/101 

###### #9108 - navigation item mobile app json provides icon urls

###### Changes
 
- Updated navigation icon list ![image](https://user-images.githubusercontent.com/87623/43930595-21650d74-9bef-11e8-8fa2-50136b3de686.png) 


###### Closes:
 Unreported 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"2eb38b960f92613d120a6df4e28348085411fac3","commit_sha":"ad1cf70b175964185a48add14fd42d70819717a8"}}

## Deployed to: www.scrippsalpha.org (Fri Aug 10 19:43:42 2018)

#### Closed PRS:

###### #9101 - SEO feedback changes

###### Changes
 
- Because our tools have a hard time parsing and linting .erb code I’d like to separate out these concerns. If ruby needs to tell the front end something then it does so through a central config file, similar to how our variables work in sass. 
- other changes are related to feedback from the ticket will update with screenshots as new fixes come online 
- 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1074 

###### #9021 - 852 allow unscoped associations for news items

###### Changes
 
- Allow a user to select if they want to show all `news_items` on a record or to scope the new_items to the ones associated to the record. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/852 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"7191e4c3ddcdb5b1732257f1ff3ea2b016f63ef5","commit_sha":"2d61e1efa6b5e3e25010934fc47e602706a150fa"}}

## Deployed to: www.scrippsalpha.org (Tue Aug  7 18:00:52 2018)

#### Closed PRS:

###### #9097 - Allow hours to be unfeatured

###### Changes
 
- was unable to unfeature hours. 
- The issue was no param was passed in for `is_featured` when it was false. Updated to set it to false if there is no `is_featured` passed in. 


###### Closes:
 [Unreported] 

###### #9100 - Enable encryption for compassus

###### Changes
 
- Adds HIPAA forms to Compassus 
- Renames HIPAA checkbox 
- Respect HCMACID setting when sending forms 


###### Closes:
 Reported by @markle 

###### #9099 - Settings only scroll when content is big enough

###### Changes
 
- Preserves scroll on smaller sizes but when space is available each section will not scroll anymore ![scrollissue](https://user-images.githubusercontent.com/2073148/43777215-1de82850-9a20-11e8-9d61-ffac91160eb3.png) 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9092 

###### #9098 - Don't add to history when switching settings page sections

###### Changes
 
- Using the replaceState method vs the pushstate we are able to manipulate the URL, so we can preserve the bookmarking feature. However now we remove the annoyance that @njakobsen pointed out in the ticket 
- The screenshot is my history after clicking on a number of settings items ![screen shot 2018-08-07 at 7 05 05 am 2](https://user-images.githubusercontent.com/2073148/43772709-fe8787ee-9a10-11e8-8ca2-fe5daea7cc6e.png) 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9093, https://github.com/combinaut/sparkle/issues/9049 

###### #9088 - Page header overflow issue

###### Changes
 
- Creates a adminheader controller so that we can change the breadcrumbs inside of the page header 
- We make a copy of the DOM nodes and place that into its own wrapper which we later append to the breadcrumbs to float. This is done in jQuery to use the simpler syntax for cloning. ![screen shot 2018-08-02 at 5 14 52 pm](https://user-images.githubusercontent.com/2073148/43611587-9ce7b672-9677-11e8-9357-5e599b8aa377.png) ![screen shot 2018-08-02 at 5 14 46 pm](https://user-images.githubusercontent.com/2073148/43611588-9d0ccf48-9677-11e8-9563-0e1bd3717538.png) 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9054 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"dfb022bd35a2abccf5a23bd403ae46ef05466a34","commit_sha":"1601c4a74819744d39cae0c691df9425fda1fc39"}}

## Deployed to: www.scrippsalpha.org (Mon Aug  6 20:54:25 2018)

#### Closed PRS:

###### #9095 - Fixes Addresses not showing

###### Changes
 
- we only want to hide the fieldsets that are settings-field not all fieldsets (for example Addresses has a nested fieldset, which we want to show when the user goes to Address. Currently it is hidden). 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1128 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"7eba673f03eb55baaa635d1563394cbe36ff0a3e","commit_sha":"48be8c4ae9635195c7ced6442b4f1b117f32a40c"}}

## Deployed to: www.scrippsalpha.org (Mon Aug  6 19:21:16 2018)

#### Closed PRS:

###### #9091 - 1119 allow hours to be featured

###### Changes
 
- Adds `is_featured` column to Hours 
- Allows users to select whether or not an hour is featured 
- Shows all Featured Hours on the Overview Tab. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1119 

###### #9077 - Sparkle 9071 add component inheritance chain protection

###### Changes
 
- Users now receive a warning when deleting a component that is being inherited and customized on another page. (screenshot is simulated, ignore duplicate text) ![image](https://user-images.githubusercontent.com/87623/43604100-c0106172-9649-11e8-9091-94252d85a0c3.png) 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9071 

###### #9065 - Only load PB js if PB iframe is present

###### Changes
 
- Fix bug that caused JS errors on promotion group editing page 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1109 

###### #9094 - Less strict PB resource match detection

###### Changes
 
- Less strict PB resource match detection using partial url matching to avoid false positives 


###### Closes:
 https://github.com/combinaut/sparkle/issues/5521 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"93cfcd7d56252b1ed346f62701a592b990026ef2","commit_sha":"424ed3ce10e032e9e4b78e84e3e9a173df8a91e7"}}

## Deployed to: www.scrippsalpha.org (Mon Aug  6 19:10:00 2018)

#### Closed PRS:

###### #9091 - 1119 allow hours to be featured

###### Changes
 
- Adds `is_featured` column to Hours 
- Allows users to select whether or not an hour is featured 
- Shows all Featured Hours on the Overview Tab. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1119 

###### #9077 - Sparkle 9071 add component inheritance chain protection

###### Changes
 
- Users now receive a warning when deleting a component that is being inherited and customized on another page. (screenshot is simulated, ignore duplicate text) ![image](https://user-images.githubusercontent.com/87623/43604100-c0106172-9649-11e8-9091-94252d85a0c3.png) 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9071 

###### #9065 - Only load PB js if PB iframe is present

###### Changes
 
- Fix bug that caused JS errors on promotion group editing page 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1109 

###### #9094 - Less strict PB resource match detection

###### Changes
 
- Less strict PB resource match detection using partial url matching to avoid false positives 


###### Closes:
 https://github.com/combinaut/sparkle/issues/5521 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"93cfcd7d56252b1ed346f62701a592b990026ef2","commit_sha":"9197a6a2afd436732a8c6390142d287e323a27d0"}}

## Deployed to: www.scrippsalpha.org (Mon Aug  6 18:51:52 2018)

#### Closed PRS:

###### #9091 - 1119 allow hours to be featured

###### Changes
 
- Adds `is_featured` column to Hours 
- Allows users to select whether or not an hour is featured 
- Shows all Featured Hours on the Overview Tab. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1119 

###### #9077 - Sparkle 9071 add component inheritance chain protection

###### Changes
 
- Users now receive a warning when deleting a component that is being inherited and customized on another page. (screenshot is simulated, ignore duplicate text) ![image](https://user-images.githubusercontent.com/87623/43604100-c0106172-9649-11e8-9091-94252d85a0c3.png) 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9071 

###### #9065 - Only load PB js if PB iframe is present

###### Changes
 
- Fix bug that caused JS errors on promotion group editing page 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1109 

###### #9094 - Less strict PB resource match detection

###### Changes
 
- Less strict PB resource match detection using partial url matching to avoid false positives 


###### Closes:
 https://github.com/combinaut/sparkle/issues/5521 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"93cfcd7d56252b1ed346f62701a592b990026ef2","commit_sha":"b2bfaf495ba6ae267c818b4b259e53a8e83fbd36"}}

## Deployed to: www.scrippsalpha.org (Fri Aug  3 21:30:55 2018)

#### Closed PRS:

###### #9032 - Settings page should identify errors 

###### Changes
 
- Adds a check everytime an input is blurred to see if it as become invalidated. If so this will add a notification to the settings navigation. 
- Works in reverse as well. If the input becomes valid again will decrement the value of the notification bubble. 
- On load, the class will scan the form to check if there have been any server-side errors added. The detection will then add notifications to each of the sections that have them. Note @njakobsen I haven't found a good way to test this in the settings page. ![screen shot 2018-07-26 at 5 23 24 pm](https://user-images.githubusercontent.com/2073148/43290488-36f0b740-90fc-11e8-9d38-41f80699003c.png) ![screen shot 2018-07-26 at 5 23 40 pm](https://user-images.githubusercontent.com/2073148/43290496-3a75ef98-90fc-11e8-99d9-11b2a11eaf7f.png) 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9031 

###### #8994 - Fix records being instantiated before they are limited.

###### Changes
 We now use a scope to limit the records when possible in order to reduce the number of records that have to be instantiated. 


###### Closes:
 https://github.com/combinaut/sparkle/pull/8976#discussion_r203775203 

###### #9066 - Assume non-sandbox if the URL is invalid.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8510 

###### #9085 - Add ability to customize snippet input param titles and placeholders.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/1121. 

###### #9080 - Sparkle 1115 unoverridden component

###### Changes
 
- fixes greyed out area on appearance tab select elements. I did a quick git bisect but couldn't find what cause this to break in the last 30 days. 
- moves appearance section tooltips up the dom tree one level to match their content tab siblings. Tooltip looks the same now. 
- ![screen shot 2018-08-02 at 11 34 18 am](https://user-images.githubusercontent.com/2073148/43594748-fed329a4-9648-11e8-86c0-517fbcef202c.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1115 

###### #9084 - 1120 assessments edit layout wrong

###### Changes
 
- Fixes Assessments and Form Builder edit pages 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1120 

###### #9090 - Fixes double button showing

###### Changes
 
- fixes double button showing. 
- also gives the correct class so that the styling is correct. 
- fixes text to match scripps styleguide. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1073 

###### #9087 - Fix can’t click on span inside next setting link.

###### Changes
 ![image](https://user-images.githubusercontent.com/7904/43609199-583f8cc6-9671-11e8-9970-ed9d2eaf3eb3.png) ![image](https://user-images.githubusercontent.com/7904/43609749-d89559d6-9672-11e8-9ff3-2c60f7f1fba4.png) Clicking it was causing a JS error. Also only add a single event observer instead of one for every nav item. 


###### Closes:
 Unreported 

###### #9086 - Fix settings nav broken on locations page

###### Changes
 We were using a selector which picked up any fieldset inside the form. We often have nested fieldsets that don’t correspond to a settings nav item. We now just use the list of nav items instead of trying to find the fieldsets. 


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/1124. 

###### #9079 - Fixes the Dropdown Overlay

###### Changes
 
- Tooltips should not bleed on to dropdowns from the header anymore ![screen shot 2018-08-02 at 10 07 57 am](https://user-images.githubusercontent.com/2073148/43589143-18743eaa-963c-11e8-8744-473a1408b112.png) 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9068 

###### #9078 - Fixes New Form

###### Changes
 
- fixes new form to look similar to the edit form 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1116 

###### #9067 - Fix missing user invite header link.

###### Changes
 Allow header actions to be customized. 


###### Closes:
 Reported by Marc. 

###### #9072 - Use edit settings for preferences

###### Changes
 
- updates the preferences from `edit` to `form` this way it will act like all other edit pages on the site. 
- even if there is no info_partial, show to identification information. 
- don't show Developer Links unless we are in page builder (this shows the components, and non_pagebuilder pages do not have components. 
- update preferences form to use new `settings_fieldset` and remove old `toggleable_fieldset` 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1111, https://github.com/combinaut/sparkle-scripps/issues/1110 

###### #9074 - Up the dropdown nav items limit

###### Changes
 
- as per request, have the nav limit of dropdown items be 7 rather than 6. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1112 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"06168c9438bb98c2802e5e34cf34f33b403fb379","commit_sha":"ae578589cdb5e78d045b22cffae5a60461c95cc9"}}

## Deployed to: www.scrippsalpha.org (Wed Aug  1 20:38:53 2018)

#### Closed PRS:

###### #9073 - fixes buggy animation

###### Changes
 
- My guess to why this is fixing the problem is because the legend is displayed table, and the h4 inside of it is display block and it's collapsing the box model around it. The glitch comes from the padding placed above the h4, this has been switched to the container now 
- Saves the animations ✅ 
- z-indexs with animations could cause problems later on so removed them 
- Transform is better than using padding (hardware acceleration?) https://drive.google.com/file/d/1v_aXkZFUbv7Q3-f8Ly8GkeXkv-w6k8EX/view?usp=sharing 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9069 

###### #9055 - Sparkle 9046 removes scrolling

###### Changes
 
- Removes scrolling 
- institutes a way to toggle between settings simulating pages 
- adds a link at the bottom of each form to jump to the next form. no link on the final form. ![screen shot 2018-07-31 at 12 35 48 pm](https://user-images.githubusercontent.com/2073148/43473634-b3ae71da-94be-11e8-82b3-003ada3b58dd.png) 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9046 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"344b0513a4fcd05df23478a23e34f403bf63f697","commit_sha":"71c2c2603abf874a5572615ace50be4af246ad4e"}}

## Deployed to: www.scrippsalpha.org (Wed Aug  1 13:43:00 2018)

#### Closed PRS:

###### #9057 - Sparkle 9053 improve pb resource assertion

###### Changes
 
- Improve Page Builder resource assertion 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9053 

###### #9061 - Prevent infinite loop when in faux context

###### Changes
 @context is `self` when in a faux context (error pages). 


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/9052. 

###### #9058 - Only Show Additional Hours when there are more than 1

###### Changes
 
- only create an Additional Hours Tab when there are more than one hours. 
- I vacillated about whether we should show the primary hours in the Additional Hours Tab or not. From discussions with Nick/Ryan we decided it made sense that a user would want to see all the hours in one place. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1015 

###### #9048 - Sparkle compassus 438 fix page alias vanity alias redirect

###### Changes
 
- Fixed bug where page aliases redirected to the canonical url instead of the vanity url 


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/438 

###### #9050 - Updates Healthplan Footer

###### Changes
 
- per convo with cat, there is a compliance need to have both "Language Assistance" and "Non-discrimination Notice" in the Healthplan footer. 
- adds "Language Assistance" back into the footer. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1101 

###### #9051 - Sparkle compassus 439

###### Changes
 
- Fixed bug preventing promotions from being edited 


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/439 

###### #9045 - Fixes homepage sitewide search error

###### Changes
 
- adds homepage partial that renders the `_page` partial. 
- fixes page_stack partial to render the `_page` partial. 
- this will keep all of our `page` like things consistent in the search results. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1105 

###### #9040 - Sparkle SEO Fit and finish

###### Changes
 
- Fixes bugs related to styling 
- Safari issues have been addressed, up and down icons will now show up. Switched to padding over margins on titles so scrollTo will give proper spacing above. 
- A number of issues addressed related to how compact the screen looks on laptops. Including adjusting sizes of grids, font sizes and padding of some large elements. Some of these changes are breakpointed so desktop users can benefit from better use of space. 
- Switched to @njakobsen suggestion for layout described [here](https://github.com/combinaut/sparkle-scripps/issues/1099omment-408251793) ![screen shot 2018-07-27 at 1 09 10 pm](https://user-images.githubusercontent.com/2073148/43335984-4c4af9be-919e-11e8-8b05-df3c033e271c.png) ![screen shot 2018-07-27 at 1 11 17 pm](https://user-images.githubusercontent.com/2073148/43336282-93f2ca80-919e-11e8-9bc2-c83d8439fcdc.png) ![screen shot 2018-07-27 at 1 14 35 pm](https://user-images.githubusercontent.com/2073148/43336474-088282e6-919f-11e8-90ba-8c222c3a0545.png) 


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/99, https://github.com/combinaut/sparkle-scripps/issues/1099 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"77f9cf811694f79c6c65a28343bb035268d20af1","commit_sha":"40d34589630a07fe43d92e3f25277b93f43b1061"}}

## Deployed to: www.scrippsalpha.org (Fri Jul 27 20:23:32 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"dcea50670badb7b28540142339d5dd24cdb7a2d4","commit_sha":"64319c34330cca5bd110600aaa8c5997fa7f58b2"}}

## Deployed to: www.scrippsalpha.org (Fri Jul 27 16:16:22 2018)

#### Closed PRS:

###### #9038 - Homepage doesn’t have news_item or event_schedule assignment lists.

###### Changes
 These associations are implicit for the home page (any featured news item or event). 


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/9035 

###### #9039 - Settings Fixes

###### Changes
 Fix settings nav showing for fieldsets that aren’t available. Fix assignment list names. Fix double icon define. 


###### Closes:
 Part of https://github.com/combinaut/sparkle-scripps/issues/1099 

###### #9036 - Sparkle scripps 1100 optimize seo analysis

###### Changes
 
- Improved SEO analysis speed 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1100 

###### #9034 - 427 mobile close button

###### Changes
 
- Fixes scrolling too far when modal open. :( 
- Fixes x looking bad on compassus. 


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/427 

###### #9030 - Use path instead of url

###### Changes
 
- Fixed bug that broke users out of sandbox when clicking primary service links on location pages 


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/374 

###### #9033 - Sparkle compassus 425 fix nav alignment near screen edge

###### Changes
 
- Rightmost nav submenus open to the left to avoid overflowing right side of page ![image](https://user-images.githubusercontent.com/87623/43291319-d440dafa-90e5-11e8-877a-f9ec393053b9.png) is now ![image](https://user-images.githubusercontent.com/87623/43291328-db36a7d6-90e5-11e8-8690-30e1a1dc34f4.png) 


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/425 

###### #9037 - Improve report loading

###### Changes
 * Delay report loading until the tab is clicked. * Add a loading spinner 


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8884 

###### #9027 - Fix scoping on tracked_calls#index.

###### Changes
 TrackedNumbers are associated with sources and candidates directly so we need to add the existing `related_tracked_numbers` behaviour to the underlying resources so we can show all calls that are implicitly related to a resource. 


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/9026 

###### #9024 - Sparkle scripps 1095 implement seo platform metadata

###### Changes
 
- Removed Twitter SEO platform 
- Using Facebook SEO metadata for open graph 
- Using Google SEO metadata for page meta tags 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1095 

###### #9025 - Auto update SEO analysis if stale

###### Changes
 
- SEO analysis updates automatically when page content changes 
- SEO analysis shows busy indicator when working ![image](https://user-images.githubusercontent.com/87623/43236913-38f22936-903c-11e8-8301-138715809cdc.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1097 

###### #9022 - Sparkle 9018 remove seo slug editing

###### Changes
 
- Removed SEO snippet slug editing 


###### Closes:
 https://github.com/combinaut/sparkle/issues/9018 

###### #9020 - Sparkle scripps 1094 fix seo word count on some layouts

###### Changes
 
- Fix SEO analysis being blank on some layouts 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1094 

###### #9010 - Improve review modal

###### Changes
 
- Fixed bug where users could click through the modal backdrop and interact with the page behind. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1053 

###### #9019 - Fixed slug not appearing

###### Changes
 
- Fixed field slug not appearing 


###### Closes:
 Unreported 

###### #8993 - Remove error presenter.

###### Changes
 Removed the Error presenter in favour of moving customizations to the ErrorPage model instead. 


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8987 

###### #9017 - Sparkle scripps 1090 assert correct resource in pagebuilder

###### Changes
 
- User is notified if the page builder cannot edit the current resource ![image](https://user-images.githubusercontent.com/87623/43174703-5dc4cf1a-8f70-11e8-9e2b-4ffbe4f00abb.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1090 

###### #9015 - Fixed misaligned target selector dropdown

###### Changes
 
- Fixed misaligned target selector dropdown 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/840 

###### #9014 - Don’t override doctor_finder background-size

###### Changes
 
- Fixed doctor finder background not covering wide displays 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1012 

###### #9008 - Remove an unused class

###### Changes
 
- Fixes the button displaying on hover for folding panels. 
- For touchscreens, always show the button. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1064 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"bbdab203e18995522482bb8aa28fd58b0ea35318","commit_sha":"373c79d357dfec721ef1b22fb569d6670b7d92d8"}}

## Deployed to: www.scrippsalpha.org (Mon Jul 23 17:31:57 2018)

#### Closed PRS:

###### #9009 - Fix Healthplan Footer

###### Changes
 
- update the flex short hand for ie compatibility. 
- create a mixin for ie-compatibility of the flex directive. For some reason ie11 does not like the shorthand of flex, so we have to write out each of the rules. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1017 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"c62d7cfb186d32843e3cfb87a56e1027d64f6c96","commit_sha":"9f8b5fc5dcd5f95499b83a497b81d865207f2d49"}}

## Deployed to: www.scrippsalpha.org (Fri Jul 20 20:09:51 2018)

#### Closed PRS:

###### #9006 - Hide empty NavigationItem form section

###### Changes
 
- Hide empty `NavigationItem` form section 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1057 

###### #9007 - Updates Giving Nav

###### Changes
 
- updates giving nav to use URL aliasing so `/pages/` is not included in the url. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1060 

###### #9005 - Sparkle scripps 1067 fix admin search selector init

###### Changes
 
- Fix admin search type selector not being initialized correctly on admin search page 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1067 

###### #9003 - 1087 new modal not working

###### Changes
 
- Fixes new modal not opening in alpha. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1087 

###### #9004 - Sparkle 8426 strip alias whitespace

###### Changes
 
- Custom Page Alias trailing whitespace is automatically removed 
- Added red border to fields that are marked invalid after submitting to the server 


###### Closes:
 https://github.com/combinaut/sparkle/issues/8426 

###### #9000 - Fix page alias conversion when no alias exists

###### Changes
 
- Fix page alias conversion when no alias exists 


###### Closes:
 https://github.com/combinaut/sparkle/issues/8634 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"e13470a0f51bc89f3cd39a879f34bb5a8d00c15b","commit_sha":"253656bbf97cd991d8ac1f0abc8ca25fd6c37b05"}}

## Deployed to: www.scrippsalpha.org (Thu Jul 19 19:27:25 2018)

#### Closed PRS:

###### #8976 - Fix nav item editing

###### Changes
 We assume `records` is an array. Ensure that it is. Otherwise we get errors when we call array methods on it. 


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8974. 

###### #8986 - Fix clinical trials index page.

###### Changes
 When visiting `/research/clinical_trials`, we encounter the following issue: * Matches the /:page/clinical_trials route. * We need that route there even though you can't actually scope clinical trials by pages. See https://github.com/combinaut/sparkle/commit/b281fb29a1189a51dd14a9d04e4b4d815be0caf3. * There is no associated `IndexPage::ClinicalTrials` page which would tell us to not scope by the parent, therefore we default to trying to scope. * the parent page doesn’t have a `clinical_trials` association, so we explode. We now check if the relevant association name actually exists on the parent before trying to scope. 


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8753. 

###### #8991 - Remove home presenter

###### Changes
 
- Removed the `Home` presenter in favour of moving customizations to the `Homepage` model instead. 


###### Closes:
 Unreported 

###### #8992 - Add Event Details back in for news items

###### Changes
 
- reimplements the event details onto new items in sitewide search results 
- reverses commit: https://github.com/combinaut/sparkle/pull/8637/commits/56ba89db058359846900e9a86981ff190cf20821 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1028 

###### #8968 - Improve component data resource link integrity

###### Changes
 
- Fixes bug where users could delete an Asset that was in use on a page, causing that page to 500 when viewed 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1043 

###### #8988 - Don’t show unaliased url in experiments

###### Changes
 
- Don’t show unaliased url in experiments 


###### Closes:
 https://github.com/combinaut/sparkle/issues/8985 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"c0df79765b84d2370d4029473fb6eaa089847afc","commit_sha":"3a909c32adfd522aae1b976060b213c6e819aff4"}}

## Deployed to: www.scrippsalpha.org (Wed Jul 18 23:29:02 2018)

#### Closed PRS:

###### #8989 - Adds a logo for ACO

###### Changes
 
- updates the logo for ACO as per ticket: https://github.com/combinaut/sparkle-scripps/issues/1070 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1070 

###### #8982 - Fix error pages

###### Changes
 Delegate SEO methods to underlying page. 


###### Closes:
 Closes #8975 

###### #8984 - Ensure that we never try to connect to Salesforce when we have no credentials.

###### Changes
 We are doing some checks in the controller to avoid creating jobs but we should really be checking inside the job itself. Otherwise we are inevitably going to keep having this issue due to missed checks or database imports from prod. 


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8983 

###### #8978 - Don’t skip descendant update for custom path pages

###### Changes
 
- Fix bug where moving a page with a "path override" would not trigger an update of the child page paths 


###### Closes:
 https://github.com/combinaut/sparkle/issues/8977 

###### #8980 - Corrects spelling of option 

###### Changes
 ![screen shot 2018-07-18 at 6 50 40 am](https://user-images.githubusercontent.com/2073148/42877460-b7c8991a-8a57-11e8-9d52-dc91f3b9b396.png) 


###### Closes:
 unreported 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"ad166c97ca9592703ed2131f82665ce9bb8d3ad5","commit_sha":"8ca12a5be2194104c9b70c69487a9cdf1bd007bd"}}

## Deployed to: www.scrippsalpha.org (Tue Jul 17 18:06:12 2018)

#### Closed PRS:

###### #8971 - Thread-safe sandbox initialization

###### Changes
 
- Thread-safe sandbox initialization 


###### Closes:
 Unreported 

###### #8967 - Added yarn install guide

###### Changes
 
- Added yarn install guide 


###### Closes:
 Unreported 

###### #8970 - Use Sandbox status in nav cache key

###### Changes
 
- Fix navigation showing sandbox nav 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1078 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"f3df7b481905b4dda891fa6386430240cb300755","commit_sha":"075f9a1db314d82ad0387a7a02884b40576283d1"}}

## Deployed to: www.scrippsalpha.org (Fri Jul 13 23:29:33 2018)

#### Closed PRS:

###### #8829 - Rough integration of SEO proof of concept

###### Changes
 
- Added client-side SEO analysis ![image](https://user-images.githubusercontent.com/87623/41571697-3e0def20-7329-11e8-9c3f-15d825d90db5.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/952 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"1af78c4e9c72c3d765595c8ca84c382752f599e1","commit_sha":"555c67b80b9f80f1b54209c66f2f28902356180b"}}

## Deployed to: www.scrippsalpha.org (Fri Jul 13 23:23:43 2018)

#### Closed PRS:

###### #8829 - Rough integration of SEO proof of concept

###### Changes
 
- Added client-side SEO analysis ![image](https://user-images.githubusercontent.com/87623/41571697-3e0def20-7329-11e8-9c3f-15d825d90db5.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/952 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"1af78c4e9c72c3d765595c8ca84c382752f599e1","commit_sha":"38ce6e01e6f1f88930ccf714e93cc4899a43193b"}}

## Deployed to: www.scrippsalpha.org (Fri Jul 13 23:13:26 2018)

#### Closed PRS:

###### #8829 - Rough integration of SEO proof of concept

###### Changes
 
- Added client-side SEO analysis ![image](https://user-images.githubusercontent.com/87623/41571697-3e0def20-7329-11e8-9c3f-15d825d90db5.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/952 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"1af78c4e9c72c3d765595c8ca84c382752f599e1","commit_sha":"b353b97a91b914ae2ae753fbb5313163ae4fd8c8"}}

## Deployed to: www.scrippsalpha.org (Fri Jul 13 21:57:31 2018)

#### Closed PRS:

###### #8829 - Rough integration of SEO proof of concept

###### Changes
 
- Added client-side SEO analysis ![image](https://user-images.githubusercontent.com/87623/41571697-3e0def20-7329-11e8-9c3f-15d825d90db5.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/952 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"1af78c4e9c72c3d765595c8ca84c382752f599e1","commit_sha":"47964effaac0a5daf4be586078984426cd4f1b66"}}

## Deployed to: www.scrippsalpha.org (Fri Jul 13 18:07:09 2018)

#### Closed PRS:

###### #8961 - Fix reporting stats when candidate_ids are in params

###### Changes
 We were messing up the reporting stats by including the same row twice in the CSV when the URL params had candidate IDs in it. Also add a candidate column to the metric table and fix candidates not being selected when using experiment results link. 


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/1063 

###### #8963 - Updated footers in hero banners

###### Changes
 
- New base app styling has targeting that doesn’t work with Combinaut. Changed markup to reflect up cascade changes. ![screen shot 2018-07-13 at 10 18 14 am](https://user-images.githubusercontent.com/2073148/42696472-2fd44c4a-8686-11e8-8b86-5c3eaf0b29c3.png) 


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/96 

###### #8962 - Sparkle scripps 999 fix linking resource index

###### Changes
 
- Sidebar Info when editing a record now shows correct label (no longer "Links _to_ other pages") ![image](https://user-images.githubusercontent.com/87623/42667345-d59607d6-85ff-11e8-9b4b-f690767ac579.png) 
- Fixed index page counts 
- No longer showing archived records in sidebar info lists 
- No longer showing archived records on"See all" page for "Links from other pages" 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/999, https://github.com/combinaut/sparkle-scripps/issues/773 

###### #8950 - Fix bug that caused incorrect layout loading

###### Changes
 
- Fix bug that caused incorrect layout loading under certain conditions 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/799 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"561fca48aaf5c106c4a6dcd78f764fd2225ab219","commit_sha":"df0f9ebacc508aad10a135025c744e2479a37688"}}

## Deployed to: www.scrippsalpha.org (Thu Jul 12 21:39:12 2018)

#### Closed PRS:

###### #8956 - Added transplant app action navigation group

###### Changes
 
- Hot deploy of latest transplant app features so content team can get started 


###### Closes:
 Unreported 

###### #8960 - Fix html rendering in messages

###### Changes
 
- make sure to html_safe the message body so that it renders the correct format. 
- fixes look of messages 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1069, https://github.com/combinaut/sparkle-compassus/issues/430 

###### #8959 - 422 bg color of homepage nav dropdown

###### Changes
 
- Fixes look of mobile navigation 
- Fixes wrong bg color of navigation on homepage. 


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/426, https://github.com/combinaut/sparkle-compassus/issues/422 

###### #8945 - Scripps Transplant app dashboard icons

###### Changes
 
- Modifies the image component to have a link and a new appearance setting for icons. 
- When the icon setting is set then padding is applied. 
- Adds a class to the mobile_app html so we can target in CSS. This also provides padding to the document so the icons are not flush with the borders of the page 
- @jbraem If you could provide some circle icons then we won't have to force the border-radius rule on this ![screen shot 2018-07-11 at 1 45 36 pm](https://user-images.githubusercontent.com/2073148/42590514-07d753d8-8512-11e8-906d-3dc5635731ce.png) ![screen shot 2018-07-11 at 1 45 21 pm](https://user-images.githubusercontent.com/2073148/42590515-07fae6c2-8512-11e8-9535-7f266ce3e973.png) ![screen shot 2018-07-11 at 1 45 11 pm](https://user-images.githubusercontent.com/2073148/42590516-081d8c04-8512-11e8-884c-54602f609057.png) 


###### Closes:
 unreported 

###### #8954 - Sparkle scripps 1066 fix seg buttons

###### Changes
 
- Fixed text alignment within seg buttons 
- Fixed seg button alignment within group 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1066 

###### #8883 - Combinaut pagespeed recommended settings

###### Changes
 
- The following are my recommendations for our page speed configurations, As @njakobsen Pointed out we want to be careful about enabling too many filters and causing server response times to go up. 
- Note on Combinaut: Since we are a low trafficked site right now and there is more value in showing that our optimization numbers are consistent. The configuration is only enabling filters that do not require checking on the rendered content from time to time (rebeaconing), or are not CSS related. As this will cause inconsistent optimizations while traffic is low. When we start to get more traffic, ie a number of views per hour at least, then this should be reevaluated 
- Note on Scripps: Corefilters is enabled by default, enabling around 15 filters (https://www.modpagespeed.com/doc/config_filters). The one I added here, `hint_preload_subresources` is something I found boosted Combinaut scores. This filter will inform the browser through headers that there are other required resources its should get in its initial response. 


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/92, https://github.com/combinaut/sparkle-combinaut/issues/73 

###### #8933 - Improve Page Cache Clearing

###### Changes
 
- Add `CacheSpider` that does a slow removal and recache of stale pages. 


###### Closes:
 Closes https://github.com/combinaut/sparkle-combinaut/issues/93 

###### #8949 - Make active call selector more prominent.

###### Changes
 Also poll for active calls every 1.5 seconds. ![image](https://user-images.githubusercontent.com/7904/42594623-c20d6c46-851d-11e8-8aa7-8e9747a89306.png) 


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/413 

###### #8951 - Sparkle scripps 1065 fix live url

###### Changes
 
- Fixed exception on promotions index page 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1065 

###### #8948 - Sparkle scripps 271 fix asset load errors

###### Changes
 
- Fixed 404 loading ajax-loader.gif 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/271 

###### #8941 - Use base class for Form resource foreign key

###### Changes
 
- Fix bug where Form submissions could be ignored if the source page type changed 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1050 

###### #8947 - Fixes all links going to homepage

###### Changes
 
- remove the compassus specific navigation item. We should use the base app to create the correct links. 
- update the classes to match the base app. 
- remove unused class 
- fixes styling. 


###### Closes:
 [Unreported] 

###### #8946 - Allow configuration of mychart URL.

###### Changes
 We want to use the test environment in staging and dev. 


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/1034 

###### #8944 - Updates the compassus header

###### Changes
 
- I removed the pn-item class, this is synonymous with `navigation-item` 


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/418 

###### #8940 - Added transplant app action navigation group

###### Changes
 
- Added transplant app action navigation group 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1054 

###### #8939 - Allow centered text in an element to center correctly

###### Changes
 
- Fix button label alignment in admin 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1055 

###### #8938 - XOR NavigationItem resource and target

###### Changes
 
- Fix bug that prevented a NavigationItem from being retargeted from a url to a resource or vice-versa 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1051 

###### #8937 - Fix typo that prevented version preview from displaying

###### Changes
 
- Fix bug that prevented version preview from displaying 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/965 

###### #8929 - Convert homepages to their own class

###### Changes
 
- Home page slugs can no longer be changed accidentally when changing the homepage title 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/947 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"1c82aa65e57169b576175d10a01f5898fbd86217","commit_sha":"421eb926e87e7597e578e4c1929614845454aba5"}}

## Deployed to: www.scrippsalpha.org (Tue Jul 10 19:13:54 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"dd90ccbe0808ecf570a7650633aa117050b77128","commit_sha":"fc95c3787997e82375e121cc60ba01c4f7906a00"}}

## Deployed to: www.scrippsalpha.org (Tue Jul 10 18:16:17 2018)

#### Closed PRS:

###### #8934 - Escape HTML in Location Browser

###### Changes
 
- when I switched hours to use wysiwyg, the in ticket: https://github.com/combinaut/sparkle-scripps/issues/832, we now save the hours with a surrounding `<p>` tag. 
- we need to escape this in react so it is not visible to the user in the location browser 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1044 

###### #8930 - Update Pagestack to use Nickname

###### Changes
 
- use the nickname if it is available for the navigation-items in page stacks. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1038 

###### #8927 - Cache related content using page cache

###### Changes
 
- Cache related content using page cache 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1036 

###### #8932 - Fix missing location page tabs.

###### Changes
 ResourcePresenters::Navigator was refactored in #8905 but this instantiation of it was not updated. 


###### Closes:
 Unreported 

###### #8928 - Suppress the sidebar when the volunteer tab is selected.

###### Changes
 I'm not super happy with this but it is limited to just Compassus. Open to better suggestions. ![image](https://user-images.githubusercontent.com/7904/42476312-8b2067ac-839b-11e8-9ea3-32ad9ee1b57a.png) 


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/417. 

###### #8931 - Sparkle scripps 939 fix index controls alignment

###### Changes
 
- Fixed index controls alignment ![image](https://user-images.githubusercontent.com/87623/42481902-9cf6ac40-8399-11e8-86f2-de97dd3ae3a6.png) 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/939 

###### #8922 - Ability to remove margin for expandable component

###### Changes
 
- Allow custom margins for expandable section 
- Center-aligns the title of an expandable section. 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1030, https://github.com/combinaut/sparkle-scripps/issues/1020 

###### #8914 - Auto-add markets when not present in form.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/415 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"d93afc579cf8bbd069159cd885e528aa59762086","commit_sha":"3a7803fb0b8e3f5d3e777b2acccebbe1959c7519"}}

## Deployed to: www.scrippsalpha.org (Mon Jul  9 18:41:53 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"b3c192833804159b195a0c06e1486dedea6bac12","commit_sha":"21e6dff35a6ce8c13e0e38815edcc738989ace7f"}}

## Deployed to: www.scrippsalpha.org (Mon Jul  9 18:15:27 2018)

#### Closed PRS:

###### #8924 - Prevent error content from being injected

###### Changes
 
- Prevent error content from being injected via ajax-content loader 


###### Closes:
 https://github.com/combinaut/sparkle/issues/8918 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"006186c139189ecf597a1aa9a8f400e581a99e38","commit_sha":"2dc48e627807856295fef8a6dedfa8923c1603a6"}}

## Deployed to: www.scrippsalpha.org (Mon Jul  9 17:52:35 2018)

#### Closed PRS:

###### #8916 - Sparkle scripps 1023

###### Changes
 
- Fixed bug where changing the url of a record without syncing it would break the "see it in the live site" links 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1023 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"c5e086a3e4ec6f63bc767ed579ec4136e1b24a18","commit_sha":"21a981f27fee526bc6e0dfe253e6f8bbdcf7c314"}}

## Deployed to: www.scrippsalpha.org (Sat Jul  7 15:09:29 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"3ff1683debeb5b3f3fbcbaaec83d90c8a6409f77","commit_sha":"007a9cdb2802187d8d1b448a9f77273d5200d966"}}

## Deployed to: www.scrippsalpha.org (Sat Jul  7 14:28:10 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"50bfe6b466d077efe6aa0331e0c9dd98d4478787","commit_sha":"06939e53fe35c4e94abe799ac71e22003816da70"}}

## Deployed to: www.scrippsalpha.org (Sat Jul  7 13:48:37 2018)

#### Closed PRS:

###### #8920 - 1027 pagestack breadcrumbs

###### Changes
 
- Creates a mixin for sidescroll 
- uses it in pagestack and and in compassus 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1027 

###### #8921 - Enables Search in ACO

###### Changes
 
- enable search in aco 


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1039 

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"1cf0af09b3f1569620e09f80b591411674af4b19","commit_sha":"631c5ca0395f8596e3b3ff7edb84f07284733ae7"}}

## Deployed to: www.scrippsalpha.org (Fri Jul  6 20:02:26 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"ecd8883335d5504011f46b3fb18ad60385c36f3b","commit_sha":"d5a2d14fc78070f968d5b89bd8f833cdb78f5f66"}}

## Deployed to: www.scrippsalpha.org (Fri Jul  6 19:36:42 2018)

#### Closed PRS:

###### #8900 - Adwords and Salesforce Integration

###### Changes
 Capture the GCLID from Adwords and pass it on to Salesforce. This will allow us to determine which leads came from which adds. We are currently using a naive matching method where we try to correlate which calls match which pageviews based on timing. We could also further refine this by dialing a code when a user is on a mobile device to directly match GCLID to calls.


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/412

###### #8915 - 1021 Hero Banner Updates for ACO

###### Changes

- Updates the min-height in aco for hero-banner. This better represents the cropped image to what is displayed.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1021

###### #8905 - Recommender and Affiliator load via AJAX

###### Changes

- Improve page speed load times by fetching Recommender and Affiliator content via AJAX


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1014

###### #8907 - Saves the canvas position

###### Changes

- when we crop, keep track of where the image sits in the image dialog container.
- set the canvasData when we create our cropper and before we set the position of the cropBox.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1024

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"e2a75c82aa5700f49330a0ac1f03d6295396e701","commit_sha":"28b1e07accf5243539a381204551aae3458266c1"}}

## Deployed to: www.scrippsalpha.org (Thu Jul  5 17:53:04 2018)

#### Closed PRS:

###### #8902 - 1004 alias lookup in wrong db

###### Changes

- Creates a Middleware to ensure that we connect to the correct database before we lookup an alias.
- Fixes the issue where if you change a locations url, the sub-pages urls are inaccessable on production and cause a 404.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1004

###### #8912 - Fix nav caching.

###### Changes
 We now use javascript to do all of the navigation group highlighting. This allows us to cache the entire navigation group at once. We were also already using JS to do a portion of the highlighting.


###### Closes:
 Closes #8897.

###### #8911 - Use path instead of URL for nav items.

###### Changes
 Otherwise we will break out of the campaign domain, for example.


###### Closes:
 Unreported

###### #8903 - Improve record loading/instantiation performance

###### Changes

- Improved `::find` and `::new` performance of all models with default values by 3x and 1.5x respectively


###### Closes:
 Unreported

###### #8893 - Sparkle scripps 1000 make page alias target use vanity path

###### Changes

- Fix bug where a PageAlias that redirects would ignore the vanity path of the target, e.g. redirecting to `pages/my-page` instead of the desired `/my-page`


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1000

###### #8887 - Fix events getting wrong record_type.

###### Changes
 In https://github.com/combinaut/sparkle/commit/71300b0ae9c27f79ff6ba51de49265822d3bf797 we changed the model_name of a ResourceIndex not to delegate to associated_page. This means we were sometimes getting a model_name that doesn’t match the `id`. This causes issues when trying to reanimate a model based on the type and id.


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8880.

###### #8910 - Optimize location rendering

###### Changes

- Locations now load 30% faster


###### Closes:
 Unreported

###### #8904 - Removes text shadow from dark text

###### Changes

- for light text we want a bit of a shadow, but for dark text we don’t.
- This was incorrectly added in at this commit: https://github.com/clouie87/sparkle/commit/1b4835eeb20cec14622fceb13c4a9266eb30c72c. It seems reasonable that we would want the same shadowing but we don’t. For most components.
- Add it in for assessments only.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1016

###### #8901 - Cache error pages.

###### Changes
 We were spending ~20% of our server time just rendering routing error not found pages.


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8899.

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"39d95d1e27aeac5991a958471c30fdf0aadfe351","commit_sha":"9eae7a3834513d13ca2c912df81b6ae677b90568"}}

## Deployed to: www.scrippsalpha.org (Mon Jul  2 21:09:46 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"36139824bb851753e77c21549ec869ec398658f4","commit_sha":"e607277ee6cd56c2d875ad417039a322945b26f0"}}

## Deployed to: www.scrippsalpha.org (Mon Jul  2 20:41:24 2018)

#### Closed PRS:

###### #8896 - Performance

###### Changes

- Fixed disabled query cache
- Cached `NavigationItem` views
- Optimized `RelationManagerGroup` queries
- Optimized `NavigationItem` queries


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1013

###### #8895 - 961 active studies breadcrumbs

###### Changes

- Fixes breadcrumbs on nested index pages (specifically `/research/active-studies`)


###### Closes:
 Fixes https://github.com/combinaut/sparkle-scripps/issues/961

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"4e2566e3a42c6b76c74f4eaa09d15399b377ec23","commit_sha":"a0e0cb2e5427bfbc720643ec4270e3c5b748fd57"}}

## Deployed to: www.scrippsalpha.org (Fri Jun 29 21:38:18 2018)

#### Closed PRS:

###### #8876 - 898 cropping not working

###### Changes

- Updates to cropper: Fixes zoom, enables the cropper when the device is checked (this stops us from having to create/destroy a new cropper when devices are clicked)


###### Closes:
 [Unreported]

###### #8886 - Sparkle scripps 1003 add mobile app nav json endpoint

###### Changes

- Updated `NavigationGroup` endpoint url to eliminate the domain name portion from the id, e.g. `www.scripps.org/navigation_groups/transplant_app.json?api=mobile_app` instead of `www.scripps.org/navigation_groups/transplant_app%7Cwww.json?api=mobile_app`.
- `NavigationGroup` endpoint now includes full url for each `NavigationItem` instead of paths.


###### Closes:
 Unreported

###### #8885 - Speed up analytics query 100x.

###### Changes
 Don’t wrap the time column in a function or else the index is not effective. We instead convert the static start and end date to the correct timezone.


###### Closes:
 Part of #8884.

###### #8882 - Sparkle scripps 1003 add mobile app nav json endpoint

###### Changes

- Added a JSON endpoint for mobile app UI navigation


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1003

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"e353732fafc2d5897075e9509ae497fa9d3341f8","commit_sha":"723574c2a401855427ed046f8ab97d9e5b2698ff"}}

## Deployed to: www.scrippsalpha.org (Fri Jun 29 15:31:27 2018)

#### Closed PRS:

###### #8881 - Disables the articles controller in scripps

###### Changes

- disables the articles controller in scripps
- redirects the `/articles` to `/` (the home page)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/977

###### #8879 - Display all degrees as the physicians name

###### Changes

- updates to include all degrees rather than just the main_degree.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/945

###### #8873 - Scripps 992 Open Schedule Style fixes

###### Changes

- Fixes style bugs as noted in the ticket.
- Note as of writing I can't get access to the book a location-variant of the open schedule, so there are a few bugs outstanding until that changes.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/992

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"f8ec2f09799d614c57ec74dbb99c82f9212d5687","commit_sha":"409e0c54f4184d7ce518d6ff2b4d479ad71b53c6"}}

## Deployed to: www.scrippsalpha.org (Thu Jun 28 15:49:01 2018)

#### Closed PRS:

###### #8867 - Fixes 500 on assets

###### Changes

- the issue is we are rejecting documents because the model name is documents, but we also want to link to the documents that are using this asset (ie. /assets/123/documents).
- This method is meant to remove duplicated nesting.
- we want to check against the base class (assets) rather than the subclass (documents).


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/988

###### #8870 - Publishing controls can show mixed status icon

###### Changes

- Publishing controls now shows a mixed status icon when inheriting unsynced component data ![image](https://user-images.githubusercontent.com/87623/41966078-098e85a8-79b3-11e8-8c0c-02a0a71371bc.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/966

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"7e0e2f313d6981a94486b40fa380a17d82e8fc7c","commit_sha":"96988afa10398635a54671976a828bb53c4005ee"}}

## Deployed to: www.scrippsalpha.org (Wed Jun 27 22:25:43 2018)

#### Closed PRS:

###### #8871 - Page Speed Experimental Settings

###### Changes

- These are experiments and require testing on a real server
- adds filter hint_preload_subresources to indicate to browsers of resources that should be downloaded with the file. Certain browsers will take advantage of this, while others will not
- adds elide_attributes removes attributes on HTML that are not required or are default anyway.
- adds defer_javascript which will stop JS from running until page load event has fired.
- Updates the time in which the inline CSS cache is emptied after a period of no page hits. Time is now set to a day


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/92

###### #8797 - Replace Croppie with Cropperjs

###### Changes

- swap out the croppie library for the cropperjs library


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/898

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"d1f4c2484897eb37e09440686a8262034e93a38d","commit_sha":"a857c72c7496c2edb6e030cac8b8b44d7569a163"}}

## Deployed to: www.scrippsalpha.org (Wed Jun 27 16:14:13 2018)

#### Closed PRS:

###### #8869 - Sparkle scripps 983 allow aliasing of more types

###### Changes

- Page Aliases can now target Locations, Services, and News Items in addition to Pages.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/993, https://github.com/combinaut/sparkle-scripps/issues/983

###### #8849 - expandable section titles should only have margin top sometimes

###### Changes

- Margin-top on titles should exist if the immediate sibling of the component is also an expandable section or global controls are enabled. ![screen shot 2018-06-22 at 6 01 45 pm](https://user-images.githubusercontent.com/2073148/41801067-5e68a93e-7646-11e8-84e4-3cccbd229765.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/973

###### #8868 - Fixes the size of the editor on Assessments Edit

###### Changes

- fixes the assessments editor size.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/987

###### #8841 - Fix incorrect modal styling in admin

###### Changes

- Fixed incorrect modal styling in admin


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/955

###### #8863 - Fix page creation issue.

###### Changes
 Sometimes `params[:type]` is an empty string.


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8862

###### #8865 - Fix failing test suite

###### Changes

- Layout selector no longer shows when adding a mobile app child page


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/985

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"52c23f227fae1d53a1760065bcefd99d12e3b714","commit_sha":"fd47ae4a3ecd23c271ecbd2cd15fefa1ea148fc8"}}

## Deployed to: www.scrippsalpha.org (Mon Jun 25 22:34:35 2018)

#### Closed PRS:

###### #8859 - Adds undiscoverable feature to Entity Services

###### Changes

- allows an entity service to be undiscoverable
- sets existing entity_services as undiscoverable (true).
- adds the discoverability behaviour to entity services.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/925

###### #8860 - Sparkle scripps 982

###### Changes

- Fixed home page banner nav not showing in PB
- Improved PB content centering ![image](https://user-images.githubusercontent.com/87623/41877410-00275d42-7886-11e8-87dd-146fca7dba3e.png) is now ![image](https://user-images.githubusercontent.com/87623/41877398-fa1ef0c2-7885-11e8-802f-9396ecad7aba.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/982

###### #8861 - Fix missing verb in editing tools modal

###### Changes

- Fix missing verb in editing tools modal


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/979

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"e55537f1a05387f69aa74cc17fcd6a25d42caa6b","commit_sha":"71d4c61e4ea56a50ee3c581350739dc770394567"}}

## Deployed to: www.scrippsalpha.org (Mon Jun 25 20:54:19 2018)

#### Closed PRS:

###### #8856 - Only show the most common when parent is a service

###### Changes

- Do not show the most common list unless parent is a service.
- Most common is scoped to the parent service.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/971

###### #8835 - Added AppHomepage and the concept of app content

###### Changes

- Added AppHomepage page type
- Added Turbolinks to "mobile_app" layout
- Added per-page mobile app navigation data to "mobile_app" layout


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/962

###### #8854 - 891 image caption style

###### Changes

- creates a third style of caption
- fixes the misalignment of the overlay caption


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/891

###### #8850 - Allow page builder for PageAlias

###### Changes

- Allow page builder for PageAlias when inheriting components from target


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/975

###### #8848 - Add boundary to Page Builder content while editing

###### Changes

- Add boundary to Page Builder content while editing ![image](https://user-images.githubusercontent.com/87623/41804341-bcaa8870-7649-11e8-892c-6184c042f65c.png) ![image](https://user-images.githubusercontent.com/87623/41800511-b7c10a24-762a-11e8-89cf-d9317cca9dbc.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/974

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"6f8414149901c8340d81b0704dc4b88b7c8d348c","commit_sha":"c07dc85daf6101cb46e59df3cef8d82986c42847"}}

## Deployed to: www.scrippsalpha.org (Sun Jun 24 03:28:30 2018)

#### Closed PRS:

###### #8851 - 938 experiment 500

###### Changes

- This is so that this fix gets on to prod: https://github.com/combinaut/sparkle/pull/8816
- This fix is currently on the release-branch


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/938

###### #8852 - 967 linking resources error

###### Changes

- This is so that this fix gets on to prod: https://github.com/combinaut/sparkle/pull/8842
- This fix is currently on master


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/967

###### #8853 - 957 fixes nested set

###### Changes

- This is so that this fix gets on to prod: https://github.com/combinaut/sparkle/pull/8839
- This fix is currently on the master branch


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/957

###### #8842 - Fix errors when a Linking Resource that have been deleted

###### Changes

- Fixes error where when trying to unpublish a resource that is linked to by a deleted record, it does not explode (500).
- Sends an error report to Honeybadger so dev team can deal with it.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/967

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"e1b12c110c3106dbbdd0baae0bff2e5dda1e4706","commit_sha":"4d101f1ff2093973614960768f8eabb1effd82c4"}}

## Deployed to: www.scrippsalpha.org (Fri Jun 22 15:52:00 2018)

#### Closed PRS:

###### #8845 - Use Navigation Policy to determine available records

###### Changes

- update lists in services tabs to use navigation policy to determine which records should be being available.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/953

###### #8838 - Create new PageStack rather than make the Page become a PageStack

###### Changes

- fixes issue where creating a PageStack from the index caused a 500.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/942, https://github.com/combinaut/sparkle-scripps/issues/959, https://github.com/combinaut/sparkle-scripps/issues/958

###### #8833 - Scripps ACO margins

###### Changes

- The following changes come from a conversation with Cat about issues on ACO
- Lowers the amount of margin applied to all components on ACO
- Expandable components should be using the `.component` margin not setting margin its self
- Expandable components had an issue where if you just added one the component should have the correct margins, however, if there was more then one expandable component next to each other it should remove the margins so they appeared to be grouped. This worked however it did not work for the very first component in a set. This change will now make it so the component will apply a negative margin to its self in order to appear grouped, thus removing the need to target the first expandable component in the set. ![screen shot 2018-06-19 at 5 46 12 pm](https://user-images.githubusercontent.com/2073148/41625962-b63d9d78-73e8-11e8-98a7-c298b2a1e5d4.png)


###### Closes:
 Unreported

###### #8836 - PSM fix heights on Giving

###### Changes

- The height of an image should always be scalable to the width of the image to avoid squishing ![fix section with images](https://user-images.githubusercontent.com/2073148/41680490-a48d98d2-749f-11e8-8412-cc04136c6753.png)


###### Closes:
 unreported

###### #8840 - Updates Qualcomm header styles

###### Changes

- updates header styles so Large Header is 32px and Small Header is 26px


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/933

###### #8839 - Passes Publishing Domain as an option to NestedSet

###### Changes

- It looks like in commit https://github.com/clouie87/sparkle/commit/4a9240c8c330500a6c39fe95b206c86f4984c747, we set the default publishing domain, and allow it to be passed in as an arg. However, we did not update our options to pass the publishing domain along to the Widget.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/957

###### #8837 - Adds extra top level nav items to aco

###### Changes

- Adds 6 top level nav items
- No adjustement to child nav items.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/946

###### #8834 - Combinaut PSM fixes

###### Changes

- Video posters should maintain a scalable height at smaller resolutions ![imageresize](https://user-images.githubusercontent.com/2073148/41678258-9bf17100-7498-11e8-93f5-1422d2389538.png)


###### Closes:
 unreported

###### #8832 - Fix bug that bypassed page authentication

###### Changes

- Fix bug that bypassed page authentication


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/956

###### #8830 - Fixes height on Vimeo component

###### Changes

- Vimeo needs to receive the mixin embeddable-component in order to modify its height on mobile devices. Since the Vimeo component will use the same styles as the youtube component I have decided to move both styles into a single rule. This also removes the need for youtube to have its own scss file in components
- Also seeing that component variants file is almost 500 lines I thought this would be a good time to start breaking down that file into a list of imports. This is so we can have much easier to read code and variants has less risk of being a dumping ground. @njakobsen @clouie87 thoughts on this? ![artboard](https://user-images.githubusercontent.com/2073148/41604466-51a63b94-73ad-11e8-96a0-7b7591266dbf.png)


###### Closes:
 Unreported

###### #8826 - Combinaut button fixes

###### Changes

- As pointed out by @jbraem we have some issues with buttons not appearing correctly in some situations
- Primary buttons created in the WYSIWYG editor or button component will now appear correctly
- Button components now have the ability to left center or right align.
- fixes some padding and front weight issues ![screen shot 2018-06-18 at 3 13 20 pm](https://user-images.githubusercontent.com/2073148/41556969-3415479e-730a-11e8-86fe-01a0bc21ca7d.png) ![screen shot 2018-06-18 at 3 09 14 pm](https://user-images.githubusercontent.com/2073148/41556970-342e4e88-730a-11e8-9df2-e16d290d7d9c.png) ![screen shot 2018-06-18 at 3 09 07 pm](https://user-images.githubusercontent.com/2073148/41556971-3442b4fe-730a-11e8-90fb-4b2d216bb336.png)


###### Closes:
Nothing Closed

###### #8827 - Don’t change the header colour at mobile breakpoint

###### Changes

- Fixed bug where Scripps www would get ACO header colours at mobile breakpoint


###### Closes:
 Unreported

###### #8825 - Fix page stacks 500 on ACO

###### Changes

- Fix error when rendering sites with stacked future bars ![image](https://user-images.githubusercontent.com/87623/41559453-e9158814-72f8-11e8-8bc4-e175f7f049e1.png)
- Fix scripps stack headers ![image](https://user-images.githubusercontent.com/87623/41561685-6e9c4968-72ff-11e8-8cb1-dda50a9fc9ea.png)


###### Closes:
 https://github.com/combinaut/sparkle/issues/8824

###### #8822 - Add authentication override token.

###### Changes
 You can now provide an override token for page authentication. This allows page authentication options to optionally specify a secret token to be passed in the `token` param of a URL. If the `token` param matches the secret, that authentication scheme is disabled sitewide.


###### Closes:
 Requested by Qualcomm and BSwift. They want to be able to provide a link from the BSwift dashboard that allows users to browse the entire site.

###### #8816 - Delegate the published? method to experiments

###### Changes

- the issue is that when we create our sync warnings, we are checking to see if the record is `published?`
- For candidates, some things can be linked to them via components (ie an image could be linked via section_with_image). However, a component does not have a published/unpublished (or active/inactive) status, it `acts_like_indirect_publication`.
- For this sync check to work, we either need to update the sync warning to run either when a record is published or when it acts_like_indirect_publication (doing it this way would also not guarantee that the candidate was published), or we need to delegate the `published?` status to the experiment (I choose this option).
- I think it makes sense that a candidate would be published based on the status of the experiment it belongs to.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/938

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"5868b490f5641af538df27f3cddc7cce16ecd72c","commit_sha":"457d37c8702ec495d7dd3f0156470383c73fa8e2"}}

## Deployed to: www.scrippsalpha.org (Fri Jun 15 17:26:39 2018)

#### Closed PRS:

###### #8821 - Scripps 919 Add dynamic titles to sign up process

###### Changes

- Makes subheaders appear on top of title position. Styled the same as titles the effect being they look like the main title of the section the user is on.
- Tested it in IE11 and effect remains unaffected. ![screen shot 2018-06-15 at 10 24 20 am](https://user-images.githubusercontent.com/2073148/41473363-16a6aa7a-7087-11e8-968b-1695c4443b01.png) ![screen shot 2018-06-15 at 10 20 35 am](https://user-images.githubusercontent.com/2073148/41473364-16bd7dea-7087-11e8-91d3-5913be534903.png) ![screen shot 2018-06-15 at 10 20 27 am](https://user-images.githubusercontent.com/2073148/41473365-16d4e07a-7087-11e8-876c-6074f729a188.png) ![screen shot 2018-06-15 at 10 20 18 am](https://user-images.githubusercontent.com/2073148/41473366-16ecbfc4-7087-11e8-9cf4-51e2314a822d.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/919

###### #8819 - Scripps 917 IE 11 open scheduling issues

###### Changes

- Fixes issues found In ticket. For future reference, it would appear that this account scheduler forces IE 11 to use IE 9's rendering
- Preloader now does not use the content override of an image instead uses a background image of the element above it
- Adds the gradients that work in IE 9 to the filtered area
- Buttons on signup pages now appear more in line with design
- Fixes display issue with review pages collapsing
- Will hide non-required field options on the insurance page if no insurance is selected
- The label for selecting if the form is being filled out by patient or not makes a comeback ![screen shot 2018-06-12 at 4 57 28 pm](https://user-images.githubusercontent.com/2073148/41441210-ad00bac0-6fff-11e8-9294-142c179b508d.png) ![screen shot 2018-06-12 at 4 49 56 pm](https://user-images.githubusercontent.com/2073148/41441219-b33e5bea-6fff-11e8-8d1e-c441f55b3f95.png) ![screen shot 2018-06-14 at 6 23 19 pm](https://user-images.githubusercontent.com/2073148/41441344-395f950e-7000-11e8-85de-443902e83526.png) ![screen shot 2018-06-14 at 6 23 02 pm](https://user-images.githubusercontent.com/2073148/41441345-39715974-7000-11e8-8021-279a2c4f92fe.png) ![screen shot 2018-06-14 at 6 21 33 pm](https://user-images.githubusercontent.com/2073148/41441346-397fa8ee-7000-11e8-9d38-2be5cae38935.png) ![screen shot 2018-06-14 at 6 08 39 pm](https://user-images.githubusercontent.com/2073148/41441347-398f8e62-7000-11e8-986d-e6e03d13c5af.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/917

###### #8815 - Simplified NamingBehavior

###### Changes

- Fixed 500 error on PageAlias edit page


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/921

###### #8802 - Combinaut header should use base app and improve accessibility score

###### Changes

- Header in Sparkle cms should use base app header for smaller package size and reusability
- Creates new header type for the inline grid
- Improving accessibility scoring to increase page rank and make these circles green. ![artboard 2](https://user-images.githubusercontent.com/2073148/41260689-7839bf0e-6da6-11e8-9279-4eaa9915dcd9.png) ![screen shot 2018-06-11 at 6 37 00 pm](https://user-images.githubusercontent.com/2073148/41260700-813b8dbc-6da6-11e8-9231-3c05b8fed36f.png)


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/83

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"a76f83e4e955eac8c8f53c1541887b683e6ea9e3","commit_sha":"090953a6aae7fbd0ee48f11aa4f7ebe9bf4efcb1"}}

## Deployed to: www.scrippsalpha.org (Wed Jun 13 02:52:58 2018)

#### Closed PRS:

###### #8814 - Reveal Assets on and Entity Service

###### Changes

- Entitiy Services were not displaying the assets linked to them.
- This made it mysterious that an image for an entity service was rendering.
- Make it clear which assets are linked and allow users to unlink/link assets as they please.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/906

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"56086cceb6e0a0ba894d942596c885e04e04876d","commit_sha":"b9fbdec9285f34b36a0f6c3e3641a64c35d961fa"}}

## Deployed to: www.scrippsalpha.org (Wed Jun 13 00:57:27 2018)

#### Closed PRS:

###### #8813 - Fixes color of secondary button

###### Changes

- fixes the secondary button color for mobile teasers


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/896

###### #8812 - Fixes Alphabetical Services List

###### Changes

- fixes the services alphabetical list.
- there are three types of lists: 1. Alphabetically Paginated (when the list is more than 40 services). 2. Not Paginated but have Letters above the letter list (when the list is more than 40 but we are on a sub_service page 3. Simple list with no letters or pagination.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/926

###### #8808 - Fix header alignment

###### Changes

- Centered the tab selectors ![image](https://user-images.githubusercontent.com/87623/41311684-d8cbf40c-6e39-11e8-9ea4-b58ff50a4357.png)
- Prevented seg buttons and dropdown triggers from wrapping


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/918

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"8f0969fc0e3444541176b4aeb3a3a7784b69aaea","commit_sha":"af2d7f0915c9c6ae790196b0616f9a76db097c1e"}}

## Deployed to: www.scrippsalpha.org (Tue Jun 12 21:32:51 2018)

#### Closed PRS:

###### #8803 - Sparkle scripps 901

###### Changes

- Improved the titles and headers of assessments ![image](https://user-images.githubusercontent.com/87623/41264394-4d112ce0-6da1-11e8-96db-b8fefc1f8e3e.png)
- Allow Assessment questions to accept WYSIWYG instruction text ![image](https://user-images.githubusercontent.com/87623/41264212-52d06f34-6da0-11e8-87b9-c9e4e201d1ae.png) ![image](https://user-images.githubusercontent.com/87623/41264337-fd1d4c82-6da0-11e8-9e4d-46f111c86285.png)
- Fixed submitter phone numbers not including country code


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/901, https://github.com/combinaut/sparkle-scripps/issues/915

###### #8809 - Hides hours if there are none.

###### Changes

- The addresses hours returns an empty array of an association `[


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/907

###### #8806 - Fixed issues in toolbar’s add stack and add alias

###### Changes

- Fixed missing page stack image in pages index popup tools


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/880

###### #8805 - Fixed nested list item icon in uber selects

###### Changes

- Fixed css bug that caused nested uber select items to overlap with their "child indicator" icon


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/894

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"ae9dabd86090523638c84feca2062d2c8f2964ee","commit_sha":"a161e870b7d79fa282b505b61d857cd23fb99eef"}}

## Deployed to: www.scrippsalpha.org (Tue Jun 12 19:00:31 2018)

#### Closed PRS:

###### #8782 - Add analytics to index pages

###### Changes
 ![image](https://user-images.githubusercontent.com/7904/41250118-0121dcb6-6d84-11e8-9a3e-66ed6a50c5c5.png)


###### Closes:
 Closes https://github.com/combinaut/sparkle-combinaut/issues/88

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"ba568de472d45260116bfda5ade1a7fdb9d9a41f","commit_sha":"8add2560fca6ff13b5f85d60484c392c99421450"}}

## Deployed to: www.scrippsalpha.org (Tue Jun 12 16:44:17 2018)

#### Closed PRS:

###### #8801 - Fix issue with uncreated Preference Settings

###### Changes

- we were `first_or_initialize`-ing the preference settings, however since we use this to create the edit_admin_preference_path, there needs to be an ID present.
- update to use `first_or_create`


###### Closes:
 [Unreported]

###### #8800 - Simplify Assessment link generation

###### Changes

- Fix bug when adding an assessment link to a hero banner button


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/850

###### #8784 - 893 service lists

###### Changes

- Remove dependency on the template to decide what kind of list is shown.
- If we are in a sub-service index page then show Body Location/Most Common (if there are any).
- Adds descriptions to the toggles so it is clearer what `Featured` and `Key (common)` means.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/893

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"dd645acd3aaaf7b16ed56173283bb34a09472e42","commit_sha":"322de2e519b52c204bf50a33e643b3588a317bc1"}}

## Deployed to: www.scrippsalpha.org (Sat Jun  9 20:06:24 2018)

#### Closed PRS:

###### #8796 - Sparkle scripps 912

###### Changes

- Added additional view options to documents admin index tools


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/912

###### #8793 - Ensure we wrap single tools in an array

###### Changes

- Fixed a bug where documents admin index tools showed unescaped HTML


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/909

###### #8792 - Fix bug where submitter info couldn’t be unselected

###### Changes

- Fix bug where submitter info couldn’t be unselected


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/900

###### #8795 - Fix page builder tab selectors

###### Changes

- Fix page builder tab selectors


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/910

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"1c7b17b3a826485e98ec769752e1e2b2a63eb9c2","commit_sha":"6046997f7ea24adc90b6ad794b94272a62369991"}}

## Deployed to: www.scrippsalpha.org (Sat Jun  9 19:48:23 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"00d6236045115e0a06155207b5a2d81ca6415f44","commit_sha":"7f1cd36822cc7ff9e5f2296824eff4584bb93326"}}

## Deployed to: www.scrippsalpha.org (Fri Jun  8 20:56:04 2018)

#### Closed PRS:

###### #8791 - Scripps 905 merge styles

###### Changes

- Merges Old Epic styles with new Embedded styles
- It looks to not effect MyScripps, however, there is an overrides.css file that looks to be making some changes to elements off of the body tag. Since our new file adds another level of specification to each rule we can end up overriding the overrides file. I have fixed the one rule I have found that is affected by this but for later on we will need to keep this in mind.
- ![screen shot 2018-06-08 at 3 14 22 pm](https://user-images.githubusercontent.com/2073148/41176650-3ccc2c28-6b2f-11e8-8991-2b30541e1970.png) ![screen shot 2018-06-08 at 3 12 01 pm](https://user-images.githubusercontent.com/2073148/41176651-3d012c98-6b2f-11e8-8234-7b90328a984c.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/905

###### #8788 - Sparkle compassus 410 custom search weights

###### Changes

- Admins can change search result weighting via an site preferences panel <img width="495" alt="screen shot 2018-06-07 at 3 56 52 pm" src="https://user-images.githubusercontent.com/87623/41130417-75a78250-6a6b-11e8-93bd-15122d398418.png">


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/410

###### #8790 - Location Scheduling fixes

###### Changes

- Fixes flow so Location Scheduling can work as similar to Doctor Scheduling
- Adds a new title to the home screen when doctors name is not present
- fixes the days of the week selector
- Fixes filter section on the home screen, ![screen shot 2018-06-08 at 1 08 37 pm](https://user-images.githubusercontent.com/2073148/41171535-e88cefc2-6b1e-11e8-9467-6d1f59a5f660.png) ![screen shot 2018-06-08 at 1 38 40 pm](https://user-images.githubusercontent.com/2073148/41172386-b9c167e2-6b21-11e8-8617-50a79842c05a.png) ![screen shot 2018-06-08 at 12 43 22 pm](https://user-images.githubusercontent.com/2073148/41171538-e8adc008-6b1e-11e8-98b1-833d75afc057.png) ![screen shot 2018-06-08 at 1 07 32 pm](https://user-images.githubusercontent.com/2073148/41171539-e8bdda4c-6b1e-11e8-9dce-612e6e7f14cb.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/904

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"cd6cda9206456abf61b527b21e51be33b2d6026f","commit_sha":"cb099bd00a5c350abe1747b175422dab3583fac3"}}

## Deployed to: www.scrippsalpha.org (Fri Jun  8 16:15:40 2018)

#### Closed PRS:

###### #8787 - Fix bug that showed the wrong menu item selected

###### Changes

- Fix bug that showed the wrong menu item selected


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/902

###### #8785 - Scripps 888 assessment themes updates

###### Changes

- As per my talk with @jbraem this changes theme selection to use the colors
- Primary, Background: `#ffe198`, Button: `#ff8300` ![screen shot 2018-06-07 at 12 07 21 pm](https://user-images.githubusercontent.com/2073148/41113057-a8359878-6a4e-11e8-9f52-b920ffce2822.png)
- Secondary, Background: `#dcf0ec`, Button: `#00a389 ` ![screen shot 2018-06-07 at 12 07 28 pm](https://user-images.githubusercontent.com/2073148/41113071-b09dba9a-6a4e-11e8-942b-a1751c1fe589.png)
- ACO Primary, Background: `#d4df62`, Button: `#f37321` ![screen shot 2018-06-07 at 12 07 02 pm](https://user-images.githubusercontent.com/2073148/41113079-b8cf77da-6a4e-11e8-9d5e-8ee62ebe80f9.png)
- ACO Secondary, Background: `#ececec`, Button: `#363636 ` ![screen shot 2018-06-07 at 12 07 12 pm](https://user-images.githubusercontent.com/2073148/41113084-bd7ed8fc-6a4e-11e8-921d-f0e0b71ec7bf.png)
- Wave, Background: wave picture, Button: `#ff8300` ![screen shot 2018-06-07 at 12 26 45 pm](https://user-images.githubusercontent.com/2073148/41113095-c49860e0-6a4e-11e8-8cb5-8028e939d09b.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/888

###### #8744 - Chevron menu too large on actual devices

###### Changes

- decreases chevron mobile menu size on actual devices
- On actual devices (iPhone 6 in this case) menu appeared too large
- ![simulator screen shot
- iphone 6
- 2018-05-31 at 14 31 44](https://user-images.githubusercontent.com/2073148/40801105-20a04052-64e0-11e8-8a7c-d886b593bb75.png) ![simulator screen shot
- iphone 6
- 2018-05-31 at 14 31 39](https://user-images.githubusercontent.com/2073148/40801106-20b3d946-64e0-11e8-9c06-327954d2ccb1.png) ![simulator screen shot
- iphone 6
- 2018-05-31 at 14 33 06](https://user-images.githubusercontent.com/2073148/40801116-25b30368-64e0-11e8-81b3-8111621c6140.png) *note that white border on combinaut is not in html its from the image on my local. :)


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/79

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"a1b06708a85179edfe1e53361773f8c7df540148","commit_sha":"a7e875bec12a08f3af58d51b0812bdca06ccb23e"}}

## Deployed to: www.scrippsalpha.org (Thu Jun  7 18:06:32 2018)

#### Closed PRS:

###### #8755 - Reporting Details

###### Changes
 * Add a table underneath the reporting graphs that lists all the events and relevant data ![image](https://user-images.githubusercontent.com/7904/40941688-ab800388-6819-11e8-9ca8-d2f33421ab59.png)


###### Closes:
 Closes https://github.com/combinaut/sparkle-combinaut/issues/88

###### #8781 - Updates to use Rails 5 caching

###### Changes

- the cache_key method must occur on an `ActiveRecord::Relation`, takes into account many factors including query statement, updated_at column value and the count of the records in collection. (source: https://blog.bigbinary.com/2016/02/02/activerecord-relation-cache-key.html)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/783

###### #8780 - Sparkle scripps 838 assessment scrollin

###### Changes

- Fixed assessment builder scrolling issue on long assessments


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/838

###### #8779 - Updates the Styling on Events Times

###### Changes

- updates the way times are displayed based on a request from the content team.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/768

###### #8775 - 857 order ongoing events

###### Changes

- update the scope `filtered_and_sorted_by_relevance` to bump up the importance of ongoing events (events that do not have an end date).
- updates the text from the start_date to just say “Ongoing” if the event has no end date, and the start date has already passed.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/857

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"f18f916087b5feeb42d6721c233e4bbd2069ab94","commit_sha":"5a15284f00bda2f34378ff9fb6282a163ddaea48"}}

## Deployed to: www.scrippsalpha.org (Wed Jun  6 02:41:32 2018)

#### Closed PRS:

###### #8767 - Assessments should be selectable from internal link tool

###### Changes

- Assessments should be selectable from link modal for hero banners


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/850

###### #8770 - Sparkle scripps 833

###### Changes

- Fixed numerous admin UI bugs
- Switched from manual to programmatic construction of dropdown menus


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/883, https://github.com/combinaut/sparkle-scripps/issues/772, https://github.com/combinaut/sparkle-scripps/issues/833, https://github.com/combinaut/sparkle-scripps/issues/881, https://github.com/combinaut/sparkle-scripps/issues/882

###### #8777 - Fixes the doctor video teaser in mobile-view

###### Changes

- accounts for the smaller dr. thumbnail. And sets the offset to be correct.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/856

###### #8743 - 800 shared component pb css

###### Changes

- begins breaking up some of the page builder code into more biteable bits.
- creates mixins to try and separate out some of the sidebar content
- Fixes alignments of filter arrow and the shared components content.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/800

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"3ea9575b7c90486d894069e98e3c4452ddafd6cb","commit_sha":"5a03902d4c0feb47c1cfe83e131c48b85a3dd139"}}

## Deployed to: www.scrippsalpha.org (Tue Jun  5 21:22:50 2018)

#### Closed PRS:

###### #8763 - Assessments background photo updates

###### Changes

- Background of assessment components can now be switched to an image
- Images, regardless of background or inlined, can now be cropped with similar crop points to that of the section with image component.
- Background image sizes in relation to their container can now be changed. By default, images will overflow behind containers if the image is larger then the container. There is an option to make the background image as large as possible without stretching the image. If the proportions of the image differ from the element, it is cropped either vertically or horizontally so that no empty space remains.
- Option to reduce padding as requested. Enabling this option reduces padding by half and as little as 15px on mobile devices.
- The content editor can now choose between dark and light text to provide better contrast when needed.
- Moves dark and light text mixins to global for use in other components outside of hero banner. ![screen shot 2018-06-04 at 12 38 29 pm](https://user-images.githubusercontent.com/2073148/40929954-40fa34d6-67f4-11e8-8dcb-fda08c5cbe36.png) ![screen shot 2018-06-04 at 11 04 33 am](https://user-images.githubusercontent.com/2073148/40929958-476b7f5a-67f4-11e8-99dd-ae088c8400a5.png) ![screen shot 2018-06-04 at 11 03 53 am](https://user-images.githubusercontent.com/2073148/40929962-4b390a26-67f4-11e8-8a96-178eddb3a733.png) ![screen shot 2018-06-04 at 11 03 39 am](https://user-images.githubusercontent.com/2073148/40929971-52c2efaa-67f4-11e8-9dfa-add44ab450b1.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/874, https://github.com/combinaut/sparkle-scripps/issues/846, https://github.com/combinaut/sparkle-scripps/issues/844, https://github.com/combinaut/sparkle-scripps/issues/845, https://github.com/combinaut/sparkle-scripps/issues/847

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"1adb6a5fd362327bcce6aeba96cf386eca61d924","commit_sha":"5574529cf72e30e1e9276f0fb02b0285e331083b"}}

## Deployed to: www.scrippsalpha.org (Tue Jun  5 20:44:12 2018)

#### Closed PRS:

###### #8774 - Fix 404 for Locations

###### Changes

- I removed the `hours/hour.html.erb` and replaced it with the `hours_list` method. I forgot to update it in one spot.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/889

###### #8756 - Assignment Backgrounds and buttons should change colors

###### Changes

- Creates a theme selector for assessments. Allows them to be changed into various color combinations. Also makes it easy to add new color combinations in the future.
- The color combinations have been take from current color variables. @jbraem you may have thoughts on whats there
- This overrides CTA coloring if set. ![screen shot 2018-06-01 at 4 44 25 pm](https://user-images.githubusercontent.com/2073148/40863014-65fdf0c2-65bc-11e8-8bfe-b5a08414678e.png) Primary theme ![screen shot 2018-06-01 at 4 54 35 pm](https://user-images.githubusercontent.com/2073148/40863057-8aab9672-65bc-11e8-8f40-ab6b30cee114.png) Secondary theme ![screen shot 2018-06-01 at 4 54 43 pm](https://user-images.githubusercontent.com/2073148/40863056-8a9d3d66-65bc-11e8-8c0e-be7c7ec67712.png) CTA Primary theme ![screen shot 2018-06-01 at 4 54 49 pm](https://user-images.githubusercontent.com/2073148/40863055-8a8d7110-65bc-11e8-94c4-235925b883d7.png) CTA Secondary theme ![screen shot 2018-06-01 at 4 54 55 pm](https://user-images.githubusercontent.com/2073148/40863053-8a7b738e-65bc-11e8-91ef-f54850bb5080.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/843

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"756abadca92e0825d0b65468effb3edc59358489","commit_sha":"d33dbc21901b4d645c115ca3576e79d453188602"}}

## Deployed to: www.scrippsalpha.org (Tue Jun  5 16:20:32 2018)

#### Closed PRS:

###### #8769 - Scope Featured to Entity Services

###### Changes

- when a parent is a Location or a Medical Service, then the featured services are based on the entity services.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/878

###### #8766 - Finds all the Records with article links

###### Changes

- Finds all the Records with article links and changes the links to text.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/870

###### #8762 - Changes checkmark to toggle

###### Changes

- this fixes the centring issue.
- it also makes the setting form more consistent since we use the toggle in the Address section.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/824, https://github.com/combinaut/sparkle-scripps/issues/873

###### #8754 - Fixes the full-width text in healthplan

###### Changes

- fixes the full-width text to apply to everything in the content-group.
- we may want ot move this up to the base app but for now it is specific to healthplan.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/864

###### #8757 - Add prompt to create redirect after changing page url

###### Changes

- Users are now asked if they would like to create a redirect while saving changes to a page's slug or overriding its path ![image](https://user-images.githubusercontent.com/87623/40861036-722f77aa-659c-11e8-8763-2c31fd3f85ce.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/490

###### #8759 - Make up for offset by increasing bottom margin

###### Changes

- Fixed experiment button alignment ![image](https://user-images.githubusercontent.com/87623/40865832-524ff41a-65af-11e8-89f7-b9bde107bdd2.png) is now ![image](https://user-images.githubusercontent.com/87623/40865810-32fa93ae-65af-11e8-9df7-941444e73df2.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/871

###### #8745 - 832 hours text to wysiwyg

###### Changes

- Updates hours text field to use wysiwyg. This is because the team wants to add phone numbers to the different hours that are not attached to the location itself.
- Creates seeds to update the hours to use wysiwyg style of text (`<p> tags`).
- remove the method `list_of_times`, now that we are using the wysiwyg we do not need to split at the `\n`.
- update csv to remove p tags.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/832

###### #8750 - Open scheduling errors

###### Changes

- Removes Login button appearance that appears on mobile safari
- Filters Provider name is on one row while Location and Day/Time take up another row split evenly between them
- provider name should also be the title ie "make an appointment with XYZ"
- forms should have the same spacing above the header ![simulator screen shot
- iphone 6
- 2018-06-01 at 11 44 00](https://user-images.githubusercontent.com/2073148/40849988-731f7daa-6591-11e8-9e90-64da207f040c.png) ![screen shot 2018-06-01 at 9 37 00 am](https://user-images.githubusercontent.com/2073148/40843569-64e076fc-657f-11e8-9ebd-9e8d240ceec4.png) ![screen shot 2018-06-01 at 9 37 43 am](https://user-images.githubusercontent.com/2073148/40843589-752603b0-657f-11e8-85e0-0ec30dc53ee3.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/860#issuecomment-393914736

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"7e3c9f2e9720d1a91ade30edbc5f7d975233ca79","commit_sha":"62581df28e016a2fc04ae9eea79e423cb7c83a05"}}

## Deployed to: www.scrippsalpha.org (Fri Jun  1 16:42:29 2018)

#### Closed PRS:

###### #8741 - Sparkle scripps 848 add assessment submitter info form configuration

###### Changes

- Added the ability to show the Assessment submitter info form before or after the questions ![image](https://user-images.githubusercontent.com/87623/40811060-afd249a6-64e4-11e8-948e-420db4f061ee.png)
- Added the ability to disable certain Assessment submitter info form fields ![image](https://user-images.githubusercontent.com/87623/40811045-9ec2ce74-64e4-11e8-925b-ab98a6914053.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/848

###### #8749 - 815 restrict access to nav edit

###### Changes

- add a check for access to navigation_groups/navigation_icons
- only allow admin/managers can edit navigation items
- Hide the Icons to restricted controllers if the user does not have access on the preferences page


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/815

###### #8751 - Removes assignment to destroyed Asset

###### Changes

- Removes assignment to destroyed Asset
- in commit https://github.com/combinaut/sparkle/commit/b9c9961396702dffdf6bdf6f5d0745dd47f59245 I removed the asset assignments to destroyed assets (I think maybe I only did this for published records).
- I will double check and either remove the linked assignments for archived or figure out why assets are still being destroyed when they are linked to content.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/865

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"e404b60a8c54925c0b66d35362313e83af07fea9","commit_sha":"140977fd6377cd6cdf98df92339e0b3383286fef"}}

## Deployed to: www.scrippsalpha.org (Fri Jun  1 14:51:59 2018)

#### Closed PRS:

###### #8740 - Add revealing radio buttons.

###### Changes
 ![image](https://user-images.githubusercontent.com/7904/40742118-7a23ec16-641b-11e8-9838-a4301bed0ee4.png)


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/402.

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"3e63d26969b19d760476662468a436e5e78cf196","commit_sha":"52b2b693860b49c3e613570ca78d4fca4f351ee5"}}

## Deployed to: www.scrippsalpha.org (Thu May 31 17:44:41 2018)

#### Closed PRS:

###### #8742 - Open Scheduling Styling Issues

###### Changes

- (required) has been given some margin
- * will appear on required inputs
- Sex input has been labeled, will change with a red underline if invalid. ![screen shot 2018-05-31 at 12 28 25 pm](https://user-images.githubusercontent.com/2073148/40794913-84963966-64ce-11e8-9fb0-ce43c82ae0e8.png) ![screen shot 2018-05-31 at 12 20 22 pm](https://user-images.githubusercontent.com/2073148/40794914-84a971fc-64ce-11e8-9450-9a1d2e385326.png) ![screen shot 2018-05-31 at 12 19 06 pm](https://user-images.githubusercontent.com/2073148/40794915-84b9a504-64ce-11e8-9d30-ce001a808df4.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/853

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"aefa1fa8f0925240d337b350ebae31e32b6bdff4","commit_sha":"0c565669e640de30c0b69970af498ca60d328e9c"}}

## Deployed to: www.scrippsalpha.org (Thu May 31 16:11:33 2018)

#### Closed PRS:

###### #8727 - Fixes the footer for physician more link

###### Changes

- Fix footer link in related content for physician's special case, we want to send the user to physician with a param.
- Update css. Refactor to organize related-content into one spot. Update to use variables.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/831, https://github.com/combinaut/sparkle-scripps/issues/215

###### #8729 - Alphabetizes location index list

###### Changes

- Alphabetizes location index list


###### Closes:
 Fixes https://github.com/combinaut/sparkle-scripps/issues/777

###### #8735 - Updates all services lists

###### Changes

- updates all services lists to include a featured tab (if featured services are available)
- If we are on an IndexPage then get the services attached to the parent.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/763

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"8424dbafb36754b8877bf3a73a0917f68cac2d01","commit_sha":"08f6447f76d909fc2b73ae17d263f70028a7425e"}}

## Deployed to: www.scrippsalpha.org (Thu May 31 15:29:52 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"b2f5e53d9eb5e21d0dbc140f1d627e0d1b944b52","commit_sha":"0d70adc1655bfb05e4fbeb958051cb3802b2eb9c"}}

## Deployed to: www.scrippsalpha.org (Thu May 31 15:04:47 2018)

#### Closed PRS:

###### #8733 - Open Scheduling Styling Updates

###### Changes

- fixes arrows in the filtering section, mobile and desktop
- Times will no longer jump around on hover
- headers do not over run on mobile
- Icon for location should be there now.
- @jbraem changes are still in development as of this writing. ![screen shot 2018-05-29 at 4 25 28 pm](https://user-images.githubusercontent.com/2073148/40684961-e56f9ac6-6360-11e8-8257-4734607eac42.png) ![screen shot 2018-05-29 at 4 25 22 pm](https://user-images.githubusercontent.com/2073148/40684962-e584f7d6-6360-11e8-97b2-0b7c6d382acd.png) ![screen shot 2018-05-29 at 4 22 08 pm](https://user-images.githubusercontent.com/2073148/40684963-e59e88fe-6360-11e8-947a-a9e561b43236.png) Modals ![screen shot 2018-05-29 at 4 46 40 pm](https://user-images.githubusercontent.com/2073148/40684976-f1029f14-6360-11e8-9c86-35f017c313c4.png) ![screen shot 2018-05-29 at 4 54 45 pm](https://user-images.githubusercontent.com/2073148/40685007-079cb4b2-6361-11e8-854d-8d5cc2252b5e.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/835

###### #8736 - Fixes the IE

###### Changes

- Fixes the Header in IE. IE does not use `display: grid` correctly.
- this implements the old way of using grid. It also makes it easy to rip out whenever IE decides to support this (like every other browser).


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/481

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"47959ef3c91873c2577c898b558287735ae7b71f","commit_sha":"2c59735d3b28048afec22e9a1d57d09cf57ab337"}}

## Deployed to: www.scrippsalpha.org (Wed May 30 18:09:29 2018)

#### Closed PRS:

###### #8737 - Show public path in search results

###### Changes

- Improved identification of search results by including public path **Admin Search Results** ![image](https://user-images.githubusercontent.com/87623/40688742-17aa72ac-6354-11e8-9651-f90947849faa.png) **Link Dialog** ![image](https://user-images.githubusercontent.com/87623/40690002-bb211d14-6359-11e8-8c33-020924c5bef5.png) **Admin Search** ![image](https://user-images.githubusercontent.com/87623/40690694-f324efda-635c-11e8-8906-174b4a5df0ae.png) **Assignment Autocomplete (`slug` url)** ![image](https://user-images.githubusercontent.com/87623/40697656-2dd4cf2e-6380-11e8-9519-a9021c0560e5.png) **Assignment Autocomplete (`id-slug` url)** ![image](https://user-images.githubusercontent.com/87623/40697631-0cbf891e-6380-11e8-9e09-d6f7cb571977.png) **Assignment Autocomplete (thumbnails)** ![image](https://user-images.githubusercontent.com/87623/40691720-4a202f84-6362-11e8-8ea7-2489d006c3f0.png) **Target Selector** ![image](https://user-images.githubusercontent.com/87623/40692108-ac57793a-6364-11e8-9d5f-d6a961969219.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/817, https://github.com/combinaut/sparkle/issues/8608

###### #8734 - Sparkle scripps 775 assessment improvements

###### Changes

- Add "identifier" column so admins can disambiguate between similarly named assessments
- Add assessment drafts
- Make it possible to review assessments
- Allow assessments to be duplicated


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/775

###### #8731 - Hit Rails when asset is not found.

###### Changes
 Needed in order for `sprockets-redirect` gem to work. I added that gem so there can be a static URL for the open scheduling CSS file (https://www.scrippsalpha.org/assets/www/open_scheduling/EpicWP.css). @feldpost Is there a reason we shouldn't do this?


###### Closes:
 Unreported

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"00742e170a220283b482c357565c18e1a218088d","commit_sha":"a4714cb6fce17c31b075de2d67ea478b7ba609b3"}}

## Deployed to: www.scrippsalpha.org (Tue May 29 18:19:28 2018)

#### Closed PRS:

###### #8730 - 422 ultrawide banner nav

###### Changes

- small tweaks to Ultrawide css
- Makes the nav smaller, fixes CTA Font size, image size.


###### Closes:
 Fixes https://github.com/combinaut/sparkle-scripps/issues/422, https://github.com/combinaut/sparkle-scripps/issues/449

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"28d4a6a506723282520d8c6eb61b5ade4bff16b9","commit_sha":"5b6a82cf9158a44e76e548ccbfe6171d01652c8d"}}

## Deployed to: www.scrippsalpha.org (Tue May 29 15:56:53 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"1b51e27cfc9a2dfec089a08428583fb6845f0985","commit_sha":"fff7135b1a28744a4350c549d5f1a7c6e74098ac"}}

## Deployed to: www.scrippsalpha.org (Tue May 29 15:31:48 2018)

#### Closed PRS:

###### #8716 - Open scheduling styling

###### Changes

- Stores CSS and SASS source files in the asset pipeline
- Styles the pages to match Justin's comp here https://app.zeplin.io/project/58b8d886391d8c67139fdf7f
- iframe to be contained in modal
- Will contain readme for future development and changes The following screenshots are those made with inital commit updated screenshots to follow in comments as completed ![screen shot 2018-05-24 at 5 22 35 pm](https://user-images.githubusercontent.com/2073148/40514807-9086bc56-5f78-11e8-92f6-426f92cf7666.png) ![screen shot 2018-05-24 at 5 22 43 pm](https://user-images.githubusercontent.com/2073148/40514809-92b23e42-5f78-11e8-9fde-d08c56870264.png) ![screen shot 2018-05-24 at 5 21 42 pm](https://user-images.githubusercontent.com/2073148/40514811-94854e9e-5f78-11e8-880d-e66c46e56cb6.png)


###### Closes:
 *Comma separated list of closed issue links*

###### #8726 - Update Itemscope

###### Changes

- specifies the itemtype from organization to Medical Business.
- Updates to use schema.org ( the old url http://www.data-vocabulary.org/Organization/ was returning a 404)


###### Closes:
 [Unreported]

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"a44add94a53de66df7fd6c24da1b91ec042effcd","commit_sha":"7d712e456cf045014659a0e713cfef063f5a5737"}}

## Deployed to: www.scrippsalpha.org (Mon May 28 18:01:25 2018)

#### Closed PRS:

###### #8714 - Standardize interface for warnings during sync process

###### Changes

- Users now receive a warning when publishing a `Service` attached to an unpublished `EntityService`
- Users now receive a warning when publishing a `Location` attached to an unpublished `EntityService`
- Users now receive a warning when publishing an `EntityService` attached to an unpublished `Location` or `Service
- Users now receive a warning when unpublishing a page with published children ![image](https://user-images.githubusercontent.com/87623/40567958-a304f6a4-602c-11e8-94d8-94a7e6dfd847.png)
- Users now receive warnings while editing a page ![image](https://user-images.githubusercontent.com/87623/40570300-3df31ffe-603e-11e8-8759-7d75bbf230de.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/816, https://github.com/combinaut/sparkle-scripps/issues/828

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"d56a0a786b8a00a39b13d48c5571eb4c167cc676","commit_sha":"f937efdd6bf2bd4ff77e9683fdb8e5ba5270aa5c"}}

## Deployed to: www.scrippsalpha.org (Fri May 25 22:25:41 2018)

#### Closed PRS:

###### #8723 - 825 physician tab updates

###### Changes

- Refactor Physician Tabs to use Tab Builder.
- Update look/feel to match the redesign of locations tabs.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/825

###### #8721 - Add lead column.

###### Changes
 ![image](https://user-images.githubusercontent.com/7904/40552060-ae0d5930-600c-11e8-9872-fc7c0cbb34e4.png)


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/401

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"48defa4aa820a308650fc3eac411a2a345a8c29f","commit_sha":"ebf9746fcf3cb302ecd69b9f15baa3ccd2d33cfb"}}

## Deployed to: www.scrippsalpha.org (Fri May 25 15:28:20 2018)

#### Closed PRS:

###### #8720 - Adds Ability to show doctors on some locations

###### Changes

- adds a proc that checks to see if the Root Location is one of the two locations that can show doctors.
- Drs. are now shown on Scripps Clinic, and Scripps Coastal Medical Center locations (and descendants).
- Drs. are now shown on medical groups associated to locations: Scripps Clinic, and Scripps Coastal Medical Center


###### Closes:
 combinaut/sparkle-scripps#637

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"fbe7db866e4efee40d20350e92f9f5e32372cf2c","commit_sha":"05361f56d8b12a39ed5a38b1c765c1d00ca0fe73"}}

## Deployed to: www.scrippsalpha.org (Thu May 24 22:42:09 2018)

#### Closed PRS:

###### #8707 - 754 location update

###### Changes

- Update Locations Tabs in Scripps.
- Add an Hours tab.
- Rearrange the Overview Tab to include the Location Main Hours in the Address information.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/754

###### #8712 - Don’t always destroy all events.

###### Changes
 This avoids promotions linked to individual events breaking.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/673.

###### #8710 - Sparkle scripps 812 fix entity services form

###### Changes

- Fixes bug that allowed users to assign archived locations and services to an `EntityService`


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/812

###### #8711 - Show the correct physician photo in google results

###### Changes

- Fixed bug where the wrong physician photo showed in google results


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/774

###### #8666 - 68 combinaut trialblaze

###### Changes

- Creates the trialblaze site and adds styles ![screen shot 2018-05-14 at 6 02 24 pm](https://user-images.githubusercontent.com/2073148/40025859-ff1bba34-57a0-11e8-8200-9dfc9bcb8669.png)


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/68

###### #8691 - 77 combinaut consolidate templates

###### Changes

- Removes a lot of dead, or unneeded code from Combinaut/www
- Prepares base app for lazy loading with changes to how handlebar templates work
- Requires https://github.com/combinaut/sparkle/pull/8698 to be merged first


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/77

###### #8704 - Merge scripps release branch into master

###### Changes

- merge scripps release branch into master


###### Closes:
 [Unreproted]

###### #8703 - Don’t underline chevron in header-nav

###### Changes

- only underline the text, not the chevron in the header navigation.


###### Closes:
 [Unreported]

###### #8698 - 82 combinaut deploy checklist

###### Changes

- Update the "Get in touch" headline styling to match "Our Products"
- Add 1em margin above Sparkle CTA button in mobile
- More space above "Get in touch" in mobile
- Standardize mobile type margins (see image)
- diagonal transitions corrected ![screen shot 2018-05-22 at 8 20 39 am](https://user-images.githubusercontent.com/2073148/40362052-62789c02-5d99-11e8-9711-fff1111bca9c.png)


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/82

###### #8701 - Improve service helper tests

###### Changes

- we were only testing that child-service names were included, however, we should be making sure that all descendants get included .
- create a grandchild service and checks to make sure it is present in our `alphabetically_sorted_services` (`unpaginated_current_collection` always returns the children).


###### Closes:
 [Unreported]

###### #8696 - 80 combinaut header

###### Changes

- use base header (for combinaut we will use the dropdown navigation).
- add the combinaut logo to variables file.
- create a way of having the primary navigation on either inline with the logo or sitting below it. (I am not sure if this should be different html or not).


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/80, https://github.com/combinaut/sparkle-combinaut/issues/81

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"e3174624208e9768169031fa401cc65ff185774f","commit_sha":"c275bb9c4d1083124eee478e1dfa484f4ebaae5b"}}

## Deployed to: www.scrippsalpha.org (Tue May 22 14:34:19 2018)

#### Closed PRS:

###### #8695 - Fix experiment modals

###### Changes

- Fixed experiment modal styling ![image](https://user-images.githubusercontent.com/87623/40260675-c5555310-5ab0-11e8-839a-8bf108a064c1.png) is now ![image](https://user-images.githubusercontent.com/87623/40262826-c0316bda-5abf-11e8-9bf6-31ea679bb694.png)
- Created `well` mixin for creating `[icon+message+action]` elements
- Removed duplicate rendering of `.coaching-message` scss
- Unified `.coaching-message` and `.info-message` scss
- Using `info_message` view helper in more places to avoid future breakage of `.info-message` elements


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/807, https://github.com/combinaut/sparkle/issues/7944, https://github.com/combinaut/sparkle/pull/8674

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"b1946430b14abdfd2836600d0cdf735b16b9e985","commit_sha":"385cc49b0ecb5c41f293b362e300f2e59b637063"}}

## Deployed to: www.scrippsalpha.org (Mon May 21 20:28:45 2018)

#### Closed PRS:

###### #8692 - Clean up button scss

###### Changes

- Fixes misaligned chevrons
- Unify dropdown icons
- Fixes index page css
- Cleans up admin page nav logo


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/785

###### #8676 - Navigation items now all non-index collection actions

###### Changes

- Fix bug that prevented ‘/physicians/find’ from being used as a `NavigationItem` target


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/782

###### #8684 - Fixes A-Z List

###### Changes

- Update Case statement. Upon reflection, the only time we want the entity_services is when the parent is a location. For all other resources (including nil) we want to show the current_collection. (This is because other resources such as News Items do not have an association to entity services). Entity Services are only the special child of a location + service


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/805, https://github.com/combinaut/sparkle-scripps/issues/780, https://github.com/combinaut/sparkle-scripps/issues/811

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"dd1160f9889e12a3cc02ac330cbc0fea8f4f0162","commit_sha":"d89cfb3ee1417b1b77067868f52b3fe350041878"}}

## Deployed to: www.scrippsalpha.org (Mon May 21 18:36:55 2018)

#### Closed PRS:

###### #8689 - Point the root physicians index page at /physicians/find

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/806.

###### #8693 - Hero Banner Cut off

###### Changes

- The hero banner was being cut off on some device sizes.
- We currently don’t allow `www` to crop the desktop/tablet images (which we maybe should ) I have a ticket up for this: https://github.com/combinaut/sparkle-scripps/issues/471.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/797

###### #8694 - Template combinaut fixes

###### Changes

- Style updates from the zeplin
-
- ![screen shot 2018-05-18 at 7 06 50 pm](https://user-images.githubusercontent.com/2073148/40261468-b23e1d98-5ace-11e8-81f4-b44e7a10a3bb.png)


###### Closes:
 hotfix

###### #8687 - Hotfix for combinaut menu

###### Changes

- This is a hotfix. We should be able to unify the combinaut menu to use the base stylings and html structure.
- Will write a ticket to do this (we should be able to remove `_menu.scss`.)


###### Closes:
 [Unreported]

###### #8690 - Fixes Compassus Mobile Menu

###### Changes

- while working on the hover menu I noticed in compassus that we set the backgournd color to white on the homepage. But we only want this in desktop mode. Otherwise it causes a weird effect.


###### Closes:
 [unreported]

###### #8688 - Fix link dialog showing unaliased links.

###### Changes
 ![image](https://user-images.githubusercontent.com/7904/40250962-ee2fe51c-5aa5-11e8-8d46-e05052ac1ea9.png) was linking to `/pages/physicians`


###### Closes:
 Related to https://github.com/combinaut/sparkle-scripps/issues/806

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"6c9141061d92ee7b3a7093743ec68ac593f2589c","commit_sha":"cc031737eec8fdacdc2dfd478f2f31e0d22b769b"}}

## Deployed to: www.scrippsalpha.org (Fri May 18 12:02:18 2018)

#### Closed PRS:

###### #8682 - 779 entity service pb issue

###### Changes

- Update to usethe service `id` rather than the service `slug`. In a method later `#determine_scope_for`, we try to find the service that are attached to the entity_service with the `service_id` param. Since we know the `id` lets use that so we are 100% sure that we are finding the correct service.
- This is fixing an issue where if the service was a child service, (ie. it had a nested slug). Since we scope the `present_scope` to services attached to the entity service, then it cannot find the nested slug (causing 404).
- For example: An Entity Service that is attached to the Child Service with a slug of: “cancer/brain”, the entity service slug would be “brain” and will not be able to find the Service based on the slug we pass it “cancer/brain”.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/779

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"a6247bd65a9eb7307ae5f97dd7aba27842171c31","commit_sha":"8d1c3ea05f3d2433cc319ce07df1386e3c61d9a4"}}

## Deployed to: www.scrippsalpha.org (Thu May 17 19:51:25 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"b2ae482ba881ae819d75ef4eefe0e54682e0e3f6","commit_sha":"8c4ab0ccc2a2763c63cfeb1717ba72c42b1436e1"}}

## Deployed to: www.scrippsalpha.org (Thu May 17 18:15:56 2018)

#### Closed PRS:

###### #8680 - 779 entity service pb issue

###### Changes

- If two entity_services are using the same slug, then we are finding the first Entity Service with that slug.
- this was not an issue before because for the most part all entity services redirected to the top-level service.
- Now that we are allowing for content to be changed on the entity service we need to make sure we are finding the right one.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/779

###### #8661 - Make unified footer for healthplan and giving

###### Changes

- Made it possible to dynamically change the number of columns in the footer


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/413

###### #8678 - Prevent items used in navigation from being destroyed

###### Changes

- Prevent items used in navigation from being destroyed


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/792

###### #8674 - Fixing Mobile Navigation

###### Changes

- create mixins for chevron/hamburger menus with associated animations (maybe this should be one file?).
- move all the jPane Menu things into mobile_navigation files (out of site-header).
- try to use base app mobile navigation as much as possible.
- small css fixes for safari/ie


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/791, https://github.com/combinaut/sparkle-scripps/issues/790

###### #8673 - Fix Image file_size.

###### Changes
 We were using the minimagick `filesize` method which seems to return different formats on different platforms (sometimes bytes, sometimes KB). We want the `size` method instead which returns an integer. This ensures that all assets list their file size in bytes instead of some in bytes and some in KB.


###### Closes:
 Closes https://github.com/combinaut/sparkle-combinaut/issues/57.

###### #8671 - Improve publishing domain rake tasks

###### Changes

- Improve publishing domain rake tasks


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/78

###### #8670 - Disable component lazy-loading in page builder

###### Changes

- Disable component lazy-loading in page builder


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/76

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"9df42093956355ebf580e68fa5aea8b5df903de0","commit_sha":"b5145c491f2bd679f52255a078fc2b896931784f"}}

## Deployed to: www.scrippsalpha.org (Wed May 16 00:56:16 2018)

#### Closed PRS:

###### #8627 - 614 hover navigation for www

###### Changes

- Convert scripps `www` from a drawer menu to a dropdown one.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/614

###### #8660 - 69 combinaut layout update

###### Changes

- Fixes a number of problems with the original template. More in line with combinaut/sparkle
- Uses clipping path rather than curves built for Sparkle. It was easier to add and more performant. Since its just that one simple curve. ![sparkle test_ 5](https://user-images.githubusercontent.com/2073148/39947569-6212d6bc-5540-11e8-9d5b-1e0e0d6bf030.png)


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/69

###### #8667 - Remove app_core

###### Changes

- Removed app_core.js to improve PageSpeed ![image](https://user-images.githubusercontent.com/87623/40030864-bac5946c-57a1-11e8-9ee4-8516266fd925.png)


###### Closes:
Nothing Closed

###### #8656 - Persist call transcripts to DB

###### Changes
 ![image](https://user-images.githubusercontent.com/7904/40069470-72bc8f48-5839-11e8-8885-553e296a4207.png) ![image](https://user-images.githubusercontent.com/7904/40065113-f3a9fc22-582e-11e8-8560-94ec7ad8165d.png)


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/239

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"32d8e0e2e61aca8b8cb66cc6c4b7bf64d4b32a90","commit_sha":"5e6d03d93b52f0b731728c0468822835cb2a2130"}}

## Deployed to: www.scrippsalpha.org (Tue May 15 14:14:46 2018)

#### Closed PRS:

###### #8665 - master to have video fixes from Production combinaut

###### Changes

- video fixes
-
-


###### Closes:
 *Comma separated list of closed issue links*

###### #8631 - Improve broken link management during sync

###### Changes

- Improved the sync confirmation screen to make warning messages more actionable ![image](https://user-images.githubusercontent.com/87623/39656299-a7b498d2-4fb3-11e8-9d58-2fafd4c2582f.png)
- Users can now retarget broken links during the sync confirmation process ![image](https://user-images.githubusercontent.com/87623/39657650-db67eb38-4fbe-11e8-9945-cca851c54696.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/653

###### #8664 - Combinaut Apply mute to template as well as fixes targeting for javascript

###### Changes

- Mute is applied to videos now on a template level
- JS should be fixed as well ![screen shot 2018-05-14 at 5 47 09 pm](https://user-images.githubusercontent.com/2073148/40025264-05ba44d4-579f-11e8-829a-6357a2e65b3c.png)


###### Closes:
 hotfix

###### #8663 - Sparkle Lazyloading issue, Play interrupted

###### Changes

- Fixes the issue where video player was not looking for the data attribute to prepare the video for loading if it was lazy loaded.
- Because this fetch is asynchronous and events muddled we now won't remove the lazy attribute from the element once it's loaded
- Catches a race condition that happens if the page is pre-scrolled to the position if this is the case it will attempt to play once the video is loaded ![screen shot 2018-05-14 at 3 01 59 pm](https://user-images.githubusercontent.com/2073148/40020197-77568978-578f-11e8-9132-c3400bc14a4b.png)


###### Closes:
 Hotfix

###### #8657 - Optimize plain text generation

###### Changes

- Improved page save speed
- Improved bulk operation speed


###### Closes:
 https://github.com/combinaut/sparkle/issues/7639, https://github.com/combinaut/sparkle-scripps/issues/169

###### #8654 - Ensure move action does not sync immediately

###### Changes

- Moving records no longer syncs immediately


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/562

###### #8659 - Fixes problem with mobile fallbacks

###### Changes

- Overlooked change for mobile fallbacks for the ![screen shot 2018-05-11 at 6 14 52 pm](https://user-images.githubusercontent.com/2073148/39949205-6a9f417e-5547-11e8-9380-def6f2becdb7.png) section with videos


###### Closes:
 Hotfix

###### #8658 - fixes hero banners on combinaut

###### Changes

- *Give enough detail that testers can evaluate any changes*
-
- ![screen shot 2018-05-11 at 1 49 43 pm](https://user-images.githubusercontent.com/2073148/39938841-3d01bdfc-5522-11e8-8f0d-4376f8f63c13.png)


###### Closes:
 hotfix

###### #8636 - Sparkle pagespeed

###### Changes

- Adds lazyloading for videos and images
- Will load the video first trigger an event for play-on-scroll to do its functionality.
- still requires some work to optimize its functionality and DRY up
- the user should select when lazy loading is used so above-the-fold media are loaded on request ![screen shot 2018-05-08 at 5 54 24 pm](https://user-images.githubusercontent.com/2073148/39785115-e3849ca8-52e8-11e8-8da8-637eefef12a8.png)


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/71

###### #8655 - Fix bulk request uri too large errors

###### Changes

- Fixed bug that gave a "Request URI too Large" error when performing a bulk action


###### Closes:
Nothing Closed

###### #8650 - 72 allows the user to select alignment

###### Changes

- The user can set how elements will align themselves within their layout centered ![screen shot 2018-05-10 at 12 56 05 pm](https://user-images.githubusercontent.com/2073148/39883645-7d29654c-5455-11e8-91f1-3a214edd8dd6.png) right ![screen shot 2018-05-10 at 1 29 03 pm](https://user-images.githubusercontent.com/2073148/39883908-269ad70a-5456-11e8-9120-48e1ea7b99dc.png)


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/72

###### #8652 - Add “first” and “last” pagination links

###### Changes

- Added "First" and "Last" pagination links


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/600

###### #8651 - Fix header link not being clickable

###### Changes

- Fix header link not being clickable


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/667

###### #8653 - Adding call transcripts

###### Changes
 A callback URL is required to enable transcript recording. We will eventually use this controller to receive other callbacks from Twilio (call initiated, call completed), but for now I want to enable call transcripts and check that they work as expected. We don’t need to do anything in the transcript ready action because the transcripts are stored in Twilio. Eventually we will also record the transcript locally but I need to figure out what type of encryption is necessary first. We disable authorization on this controller and rely on a shared secret instead.


###### Closes:
 Related to https://github.com/combinaut/sparkle-compassus/issues/239

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"25c3df58c53518eb04584bc4dee55a0f8c2b0401","commit_sha":"968574b17b69d71b3e27ef7218619c938a683afc"}}

## Deployed to: www.scrippsalpha.org (Thu May 10 16:58:57 2018)

#### Closed PRS:

###### #8644 - Rearrange rules so xlarge actually triggers.

###### Changes
 $full rule was after $xlarge rule so it took precedence even at $xlarge size.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/755.

###### #8648 - Give hero banners left aligned text by default.

###### Changes
 Lots of Scripps banners don’t have the text-left class applied and we want it to be the default option.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/771

###### #8606 - Update Croppie

###### Changes
No Changes included in the log


###### Closes:
Nothing Closed

###### #8647 - Fix bug that causes incorrect breadcrumbs

###### Changes

- Fix bug where breadcrumbs with identical names but different target pages could appear under very specific circumstances


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/740

###### #8646 - Make sure entity service always shows location in breadcrumbs.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/741.

###### #8645 - Removes perserved asspect ratio

###### Changes

- Removes preserving aspect ratio from wave-headless.svg.
- Since we don't know the width of the user's viewport its impossible for us to set one aspect ratio and have it work. The browser tries to compensate for this by centering the SVG by default. Sometimes we want this behavior but for instances like this, we do not. `Setting preserveAspectRatio="none"` allows CSS to take over and resume the normal behavior for `background-size:cover`
-


###### Closes:
 unreported

###### #8639 - Refactor Physician recommendations

###### Changes

- Ensure visitors can only recommend the same physician once, subsequent recommendations of the same physician are ignored
- Fix bug where recommend button did not disable after recommending


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/756

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"0079e7f4d952bdd44e682094b915399dc8b23a59","commit_sha":"06c1a58ea884082f1aadfcfc262f5f5a750ef669"}}

## Deployed to: www.scrippsalpha.org (Wed May  9 19:53:54 2018)

#### Closed PRS:

###### #8643 - Hero Banner Fixes

###### Changes
 ![image](https://user-images.githubusercontent.com/7904/39835017-cb173748-539c-11e8-9d2a-70cf09a929f7.png) ![image](https://user-images.githubusercontent.com/7904/39835062-f3bf2f5c-539c-11e8-9efb-c5c4225ae6cc.png)


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/765

###### #8641 - Only show published entity services.

###### Changes
 Before we were showing services on a location where the linking entity service was archived, because we were only checking the publication status of the service, not the link. We now check both.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/764.

###### #8607 - Remove unused medical classification routes.

###### Changes
 Medical Classifications are used to relate things in the background but they don’t have any front-end representation (no index or show page). We had some routes and a controller but no views. All the slugs were nil.


###### Closes:
 Closes combinaut/sparkle-scripps#725

###### #8640 - Hide grid-view thumnails in mobile breakpoint

###### Changes

- Featured services thumbnails are now hidden in mobile view


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/759

###### #8637 - Hide news events info

###### Changes

- News events info is no longer shown to the user in search results


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/761

###### #8635 - Symlink sitemaps across deploys.

###### Changes
 All sitemaps are now created in the public/sitemap directory which is symlinked across deploys.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/758.

###### #8632 - 65 combinaut Minor revisions

###### Changes

- reduce line-height of h3's in hero banners
- cleans up margins on form pages
- removes text shadow from light-text hero banner links
- Form inputs now have a darker grey background
- dark grey color is now selectable as a background for the hero banner colors ( so `request a demo` page can use that color)
- Min-height rules from base app for hero banners set to 0 so that banners will always be as tall as the content with in
- Adds a Muted checkbox to sections with video components (local to combinaut). This is to avoid issues with new Chrome behavior rules in regards to autoplay videos https://developers.google.com/web/updates/2017/09/autoplay-policy-changes ![screen shot 2018-05-07 at 5 18 41 pm](https://user-images.githubusercontent.com/2073148/39726708-f5bdcb2c-521d-11e8-8541-d59396f1d69d.png) ![screen shot 2018-05-07 at 5 05 29 pm](https://user-images.githubusercontent.com/2073148/39726709-f5cf5bda-521d-11e8-8e37-63643b28d4ec.png) ![screen shot 2018-05-07 at 5 05 18 pm](https://user-images.githubusercontent.com/2073148/39726710-f5e2a3de-521d-11e8-8a9f-452cf61ac574.png) ![screen shot 2018-05-07 at 5 42 30 pm](https://user-images.githubusercontent.com/2073148/39726743-0e288a30-521e-11e8-9206-c49087a57d46.png)


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/64

###### #8572 - scripps forms validation

###### Changes

- Stops empty required form fields from displaying error until submit is pressed
- Adds a new class to the form to indicate it has been attempted to submit but did not do so successfully
- makes use of `:placeholder-shown` pseudo selector to check if there is an empty form feild


###### Closes:
 *Comma separated list of closed issue links*

###### #8629 - Add ability to set target for external links.

###### Changes
 Sometimes we want external links to open in the same tab. ![image](https://user-images.githubusercontent.com/7904/39651504-624f9188-4fb9-11e8-9e7e-f6590da577af.png)


###### Closes:
 Related to https://github.com/combinaut/sparkle-scripps/issues/479

###### #8630 - Updates hero-banner to take more variables

###### Changes

- combinaut wants some unique variables that were hard-coded in hero-banner.
- update to use variables.


###### Closes:
 [Unreported]

###### #8628 - 617 enable aco subdomain

###### Changes

- Copies the two files required for styling the same as qualcomm.
- This will need to be refactored in the near future.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/750

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"97d553545dade012ccda9abe7ed110369edf4195","commit_sha":"158f51913ae1867ed3a5bd2d587677c937faff69"}}

## Deployed to: www.scrippsalpha.org (Fri May  4 19:51:55 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"18b102fa2a5934e780f6d58050f63621901c8725","commit_sha":"22fdedb10d17078bf5a57c17573887749a740f8d"}}

## Deployed to: www.scrippsalpha.org (Fri May  4 19:32:05 2018)

#### Closed PRS:

###### #8619 - Reporting Exporting

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/47.

###### #8626 - Remove need to explicitly specify subdomains in staging nginx config

###### Changes
 I’ve unified the two config files into one because we need the sandbox regex (`~^sandbox-\w+\.scrippsalpha\.org$`) to come before the non-sandbox regex (`~^(?<subdomain>\w+)\.scrippsalpha\.org$`). This is because nginx runs the server block for the first matching regex.


###### Closes:
 Unreported but was causing issues accessing new ACO domain

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"b20991cb05a99d93680ca657ca2349b532c5c448","commit_sha":"10387695838f66deb831ea243d4d77e713d5a76b"}}

## Deployed to: www.scrippsalpha.org (Thu May  3 18:48:39 2018)

#### Closed PRS:

###### #8620 - 275 hero banner fix

###### Changes

- This is re-instating a hero-banner refactor that got reverted. Hoping @jdornadul can test this week.
- Reference PR: https://github.com/combinaut/sparkle/pull/8216


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/275, https://github.com/combinaut/sparkle-scripps/issues/475

###### #8622 - Add Metrics summary to analytics graph

###### Changes

- We now show the total and average for the analytics ![image](https://user-images.githubusercontent.com/87623/39553909-bd0a9b36-4e24-11e8-9ee1-987e684d273a.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/478

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"627a3fa0ba3305bd20e45a7835f41491b7dfa276","commit_sha":"1b68ea55621358f49334b500feba68b1e6512f37"}}

## Deployed to: www.scrippsalpha.org (Thu May  3 01:28:41 2018)

#### Closed PRS:

###### #8624 - Sparkle scripps 496 improve wide table rendering

###### Changes

- Allow wide tables to scroll horizontally ![image](https://user-images.githubusercontent.com/87623/39555365-bc2848cc-4e2d-11e8-831e-e02012aaa388.png)
- Allow full height table editing instead of limiting to 400px height ![image](https://user-images.githubusercontent.com/87623/39555344-8cf69f2c-4e2d-11e8-8bfb-27c6d7e6a846.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/496

###### #8623 - Creates a test

###### Changes

- adds a test. Test that the iframe will show custom content for both an index page with a standard url (ie. `services`) and an index page with a custom-url


###### Closes:
 [Unreported]

###### #8612 - 617 enable aco subdomain

###### Changes

- Create an ACO domain that looks/acts like qualcomm (use same colors, and scripps logo).


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/617

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"373b08485c08253f2d310aeeeb1967180270ef51","commit_sha":"bc7f65d5c893a69dd94e4009a53d6fc462f0959f"}}

## Deployed to: www.scrippsalpha.org (Wed May  2 19:21:37 2018)

#### Closed PRS:

###### #8618 - Fix drag and drop

###### Changes

- Fix bug in PB drag and drop


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/735

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"e4a1273e73624c97c47dd42d29be4991bfb88024","commit_sha":"1fc685931defd690e395a611a30de09a4c5be3ec"}}

## Deployed to: www.scrippsalpha.org (Wed May  2 14:53:37 2018)

#### Closed PRS:

###### #8610 - Use navigation groups for scripps www

###### Changes

- www domain sitemap can now be customized using navigation groups
- www domain privacy links can now be customized using navigation groups ![image](https://user-images.githubusercontent.com/87623/39487722-008c20aa-4d35-11e8-84ae-2cb414529051.png)
- www domain meta navigation links can now be customized using navigation groups
- www domain meta contact navigation links can now be customized using navigation groups ![image](https://user-images.githubusercontent.com/87623/39487774-25fa4d6c-4d35-11e8-8828-39359d367717.png)
- Updated Health and Wellness links ![image](https://user-images.githubusercontent.com/87623/39492878-dde08ac6-4d45-11e8-808a-dbb1778e3b1c.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/704, https://github.com/combinaut/sparkle/issues/8604

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"b58126860be41b5cf2872a8d6595b7dd67044a0f","commit_sha":"1f2e14c38e4ce7b40e65c862b9957af400bbbbe8"}}

## Deployed to: www.scrippsalpha.org (Tue May  1 22:04:12 2018)

#### Closed PRS:

###### #8613 - Fixes the Store object on IndexPage

###### Changes

- I was using store incorrectly and it was not coding it as JSON.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/734

###### #8599 - Add Broadcast message per publishing domain

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/654

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"f86666be75f3b245f76bb69c217aafe92d29c008","commit_sha":"bae4afa1d9fe5407f8ad3b67ef9281e5e79858f7"}}

## Deployed to: www.scrippsalpha.org (Tue May  1 21:45:23 2018)

#### Closed PRS:

###### #8613 - Fixes the Store object on IndexPage

###### Changes

- I was using store incorrectly and it was not coding it as JSON.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/734

###### #8599 - Add Broadcast message per publishing domain

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/654

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"f86666be75f3b245f76bb69c217aafe92d29c008","commit_sha":"fae0b10a9059c533a6283c610622807b7f071b9c"}}

## Deployed to: www.scrippsalpha.org (Tue May  1 20:19:02 2018)

#### Closed PRS:

###### #8611 - Fix inclusion of degree in meta title.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/731.

###### #8563 - 661 clinical trials

###### Changes

- the issue is that the team wants to display a non-nestable resource as a nested page. So normally for a resource like a service, we would get the services associated to the parent service. However, there are not clinical trial relations (nothing has many clincial_trials). If it is a clinical trial index page, we want to render a list of all clinical trials.
- Pass in the associated page ID rather than the slug. This makes it easy to display the content for the associated page. It means that the "type" of association does not matter (it could be associated with entity_id/entity_type, or by child/parent relationship. ). This fixes the problem of rendering the component content on root index pages.
- Updates NewsItem 3888 to be an IndexPage.
- Removes old hardcoded routes


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/661, https://github.com/combinaut/sparkle-scripps/issues/700, https://github.com/combinaut/sparkle-scripps/issues/702, https://github.com/combinaut/sparkle-scripps/issues/703

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"4b56646b434c4d5ce0078f7dee18a2c19ef032ec","commit_sha":"8575401f53b138c976e4215f22516748ba54edab"}}

## Deployed to: www.scrippsalpha.org (Tue May  1 18:37:30 2018)

#### Closed PRS:

###### #8281 - Updates Autocomplete Sitewide Search Results

###### Changes

- use the resources title rather than the given meta-title.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/310

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"8835a85d12151661fb2e70f5f14d8b821a5cf052","commit_sha":"4db3a5d63fbaa3d7d5acbabfa1927dd8264bf8b4"}}

## Deployed to: www.scrippsalpha.org (Tue May  1 17:58:51 2018)

#### Closed PRS:

###### #8600 - Fixed 404 on nested specialties

###### Changes

- Fixed 404 on nested specialties


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/724

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"b587da92fbdf32ed0ceb7a500dc5eeb6cd0c679b","commit_sha":"925cc3de2683d3e228b9a8c92ceb38a59ad03fb6"}}

## Deployed to: www.scrippsalpha.org (Tue May  1 17:17:14 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"fe6aea4f9745e17a45573d3df948dca13d2b024d","commit_sha":"6e7b48db09d7f782f8a99c7b79c676aa5f7b1452"}}

## Deployed to: www.scrippsalpha.org (Tue May  1 14:59:45 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"d56a06919adc84f83586444a5c5b238d40b3f8de","commit_sha":"c544ff0ad23d851da3cc9d03ffe2c4f14825fd61"}}

## Deployed to: www.scrippsalpha.org (Tue May  1 14:34:49 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"b2a06bf31bb2f4f4592120fdb4904dc8c1d3b4b7","commit_sha":"df036ca4b2b31816f7635ae3da6914e8034dbdf6"}}

## Deployed to: www.scrippsalpha.org (Tue May  1 14:13:28 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"699b4f33e2c38bf64cc265e0d443bdbe8bca1f03","commit_sha":"9f7538c0fedc83dd55a929a1953de95c7b95876f"}}

## Deployed to: www.scrippsalpha.org (Tue May  1 12:51:35 2018)

#### Closed PRS:

###### #8601 - Add Review Messages to Review Pane

###### Changes
 Also removes a ton of crappy CSS. ![image](https://user-images.githubusercontent.com/7904/39450221-8ca3f0ba-4c98-11e8-9e08-4002a9f33614.png)


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/7001

###### #8602 - Fixes bug

###### Changes

- makes test fail unless the correct alias is found (our associated_page does some magic that looks up child pages based on contoller so the slug `services` will be found even if the alias was not created correctly).
- fixes bug. Uses the without_vanity_path when creating page_builder_path


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/729, https://github.com/combinaut/sparkle-scripps/issues/730

###### #8596 - IdentificationBehavior no longer grants paths by default

###### Changes

- Fixed bug that prevented access to the Roles editing interface


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/723

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"2fd5ae398efbd8726681075feacd3109c85b0eb5","commit_sha":"36858bb873360d00f4973f41b6e558834db11d3e"}}

## Deployed to: www.scrippsalpha.org (Mon Apr 30 14:18:24 2018)

#### Closed PRS:

###### #8594 - Add support for wildcard LegacyRoutes.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/369 Closes https://github.com/combinaut/sparkle-scripps/issues/370

###### #8598 - Speed up latest tag determination.

###### Changes
 Old method takes ~10 seconds and can return incorrect results. New method takes < 1 second and is more robust. Results from old method. Notice `14.0.86` is not selected as the latest tag. ![image](https://user-images.githubusercontent.com/7904/39399080-772a592c-4ae5-11e8-9db6-e0348c8d5934.png) This also might be a good chance for us to figure out our version numbers a bit. Right now we just release a `0.0.1` release every time by default. It seems like we are more often introducing changes that warrant a `0.1.0` release. Also, there is one shared version number increment between all clients. This seems a bit nonsensical. Maybe we should just switch to datestamp releases (e.g. `compassus-20180412123223`)?


###### Closes:
 Unreported.

###### #8590 - Sparkle scripps 705 fix pb lockup after preview refresh

###### Changes

- Fixed bug where page builder would not let components be clicked after refreshing the contents of the iframe


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/705

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"2e2b6171e64789ef104f9797d78ed9b37d31d3fc","commit_sha":"9394f3ba17917f6d3424db57c14a93d6b7ad2ed5"}}

## Deployed to: www.scrippsalpha.org (Sat Apr 28 15:41:45 2018)

#### Closed PRS:

###### #8595 - Update switch to more custom sweet-alert-confirm

###### Changes

- Fixed bug that disabled bulk delete confirmation popup


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/712

###### #8593 - Sparkle scripps 711 dont allow unauthorized deletes

###### Changes

- Prevent unauthorized deletes via bulk deletion


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/711

###### #8592 - Fix bug where PB preview didn’t show index template

###### Changes

- Fix bug where PB preview showed the page template instead of the index template for `IndexPage`


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/722

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"a9aa58f58ccd9f0bea9c0c872aa1f8b43cfe7ffb","commit_sha":"712a984be20a32195e4de811432c6d7a9926771d"}}

## Deployed to: www.scrippsalpha.org (Fri Apr 27 17:11:48 2018)

#### Closed PRS:

###### #8591 - Fix review token doesn't work on index pages.

###### Changes
 The `current_resource` on index pages is a `ResourceIndex`, not the underlying associated page. This meant the [`matches_current_resource?` check](https://github.com/combinaut/sparkle/compare/scripps-717?expand=1#diff-b22c27c48535528e35771f2321d22808R33) was failing. Fixed by using the existing `review_delegate` functionality and adding it to `ResourceIndex`.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/717

###### #8589 - Groups Location List by Parent

###### Changes

- Groups Location List by Parent


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/645

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"1bb0294172a9e51b24c9f342f9b5a930865b872b","commit_sha":"9f5b474457b20e110422784528c6db19c00fad73"}}

## Deployed to: www.scrippsalpha.org (Thu Apr 26 23:50:13 2018)

#### Closed PRS:

###### #8566 - Allow existing assets to be uploaded and matched.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/643.

###### #8585 - Improve CurrentEdit system

###### Changes

- Fix bug where outdated "someone is editing this page" messages were being shown


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/707, https://github.com/combinaut/sparkle/issues/8294

###### #8587 - Fixes the edit path for entity service

###### Changes

- rather than sending the user to the location/service path, send them to the edit path of the entity service.
- while the location/service takes us to the correct path on the front end, I think it makes sense that we keep this as the entity service in the back end. This way we know we will be routed to the correct place every time.
- Shows Entity Services instead of Services associated to a location.
- Renders pagebuilder when `Let me customize the components` is selected.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/644, https://github.com/combinaut/sparkle-scripps/issues/714, https://github.com/combinaut/sparkle-scripps/issues/715, https://github.com/combinaut/sparkle-scripps/issues/716

###### #8588 - Consider internal links when listing associated documents for assets.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/142.

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"023fe073b82131bff21a1139ac9f6bd0ab862794","commit_sha":"22a04b585e52557315fecdacaa0b0f90cfc7719c"}}

## Deployed to: www.scrippsalpha.org (Thu Apr 26 21:20:36 2018)

#### Closed PRS:

###### #8583 - Adding review toggle.

###### Changes
 ![image](https://user-images.githubusercontent.com/7904/39273343-83aa46ca-48ac-11e8-8944-ab39682b6740.png)


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/656.

###### #8586 - Display the intro section in mobile view

###### Changes

- Three column template hid the intro section when in mobile view. This is no longer the expected behaviour.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/674

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"b8feb21adc0a8e2b21cc2cf16fb7837ce3862c23","commit_sha":"73feaaa76afb233624ca6f36f94d83c2c8e15d3e"}}

## Deployed to: www.scrippsalpha.org (Wed Apr 25 22:03:12 2018)

#### Closed PRS:

###### #8582 - Fix high z-index of dropdown button.

###### Changes
 Only the dropdown-menu needs the high z-index. Fixes: ![image](https://user-images.githubusercontent.com/7904/39272188-35737786-48a9-11e8-916c-e201e2870407.png)


###### Closes:
 Unreported.

###### #8584 - Remove videos#index route

###### Changes
 There is no reason that I can see for a top level route that just outputs a giant unstyled page full of random videos.


###### Closes:
 Closes combinaut/sparkle-scripps#708

###### #8581 - Don’t show flash message after previewing change

###### Changes

- Prevents "Changes Saved" message from appearing after previewing Page Builder changes


###### Closes:
 https://github.com/combinaut/sparkle/issues/8579.

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"76f7fdeabd7d1d86fa31a379c824d0682b4ff560","commit_sha":"9052f28ec3759932ba7225279b042184edce3209"}}

## Deployed to: www.scrippsalpha.org (Wed Apr 25 21:38:50 2018)

#### Closed PRS:

###### #8574 - Added ability to bulk delete archived records

###### Changes

- Added ability to bulk delete archived records ![image](https://user-images.githubusercontent.com/87623/39220744-e8830c5a-47e7-11e8-802b-761a4ae7e8b8.png) ![image](https://user-images.githubusercontent.com/87623/39220859-b0448c50-47e8-11e8-8ec7-473e9ab06b96.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/192

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"a39daa41aece27745eae74cafed573839c49b22f","commit_sha":"84e3f1e5cc62426993b80870b9ac6e04b9c2c970"}}

## Deployed to: www.scrippsalpha.org (Wed Apr 25 19:01:49 2018)

#### Closed PRS:

###### #8570 - Fixed bug where preview of slug change would 404

###### Changes

- Fixed bug where switching to Content tab of Page Builder after an unsaved of slug change would cause a 404


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/665

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"5be5dca4d75676b1f9309dc3feae8e4c8bdcefa9","commit_sha":"1f047bf6cfddfeaa890de9e7bb9e49d1687e1650"}}

## Deployed to: www.scrippsalpha.org (Wed Apr 25 18:49:52 2018)

#### Closed PRS:

###### #8577 - Don’t show list header when paginating.

###### Changes
 The pagination already shows us the current letter.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/699.

###### #8565 - Fix avatar not assigned correct type during upload.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/690. Closes https://github.com/combinaut/sparkle-scripps/issues/689.

###### #8580 - 661 hotfix 404

###### Changes

- Hotfix for Clinical Trials not rendering trials list
- I have a better PR (https://github.com/combinaut/sparkle/pull/8563) coming that will tackle some other issues related to https://github.com/combinaut/sparkle-scripps/issues/661


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/661

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"43460666abd6349e083cb59438df9bc12e1e6bd7","commit_sha":"8be0e2c98d1280345d95636b9356c4def20ca216"}}

## Deployed to: www.scrippsalpha.org (Tue Apr 24 22:45:41 2018)

#### Closed PRS:

###### #8568 - 62 Adds fixed mobile menu.

###### Changes

- The main navigation is now fixed to the top of the page on tablet and smaller.
- Fixes some issues with variables and when they are declared, now they are set for _after_ setup scss is run.
- removes some JS that sent the scroll position back to the top when the menu was opened ![screen shot 2018-04-24 at 3 01 48 pm](https://user-images.githubusercontent.com/2073148/39205427-fbd6b642-47d0-11e8-8a44-73745f466dde.png) ![screen shot 2018-04-24 at 3 01 43 pm](https://user-images.githubusercontent.com/2073148/39205429-fd73dda4-47d0-11e8-944e-a0acb9aa0694.png) ![screen shot 2018-04-24 at 3 05 27 pm](https://user-images.githubusercontent.com/2073148/39205435-026fcf7a-47d1-11e8-8a11-771c1dbee9ab.png) ![screen shot 2018-04-24 at 3 05 17 pm](https://user-images.githubusercontent.com/2073148/39205436-02901136-47d1-11e8-807f-3bcbd92599f1.png)


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/62

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"09ff19f747652be16633c4b28f79304dcfc26a96","commit_sha":"b13b60d225eddf8fb97b178ff85a95d0a294bbe6"}}

## Deployed to: www.scrippsalpha.org (Tue Apr 24 22:23:06 2018)

#### Closed PRS:

###### #8571 - Remove pagination for advanced services subview.

###### Changes
 * Disables pagination when in advanced services subview. * Fixes body system list ![image](https://user-images.githubusercontent.com/7904/39216796-16047f26-47eb-11e8-9a6b-861902023b17.png)


###### Closes:
 Unreported.

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"63da8f4ab802f3abe522da111b143bf94bc941f9","commit_sha":"eb278b5f17180c40357507123435280b2f41efe9"}}

## Deployed to: www.scrippsalpha.org (Tue Apr 24 20:10:50 2018)

#### Closed PRS:

###### #8569 - Correctly scope service index page tabs.

###### Changes
 We weren’t scoping alphabetically_sorted_services to exclude archived services. We also weren’t including descendant services in services_by_body_system_list. ![image](https://user-images.githubusercontent.com/7904/39208142-1467d750-47d0-11e8-8cc4-21be1c3f2a11.png)


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/693.

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"fffd43984353b186bbd2acfb2a3a14c04993183d","commit_sha":"a4d90e1db5e16c9e97e47ce14266fadabed772c6"}}

## Deployed to: www.scrippsalpha.org (Tue Apr 24 17:46:59 2018)

#### Closed PRS:

###### #8567 - Fixes the logos for Firefox/IE

###### Changes

- logos were stretched for qualcomm and healthplan


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/692

###### #8564 - Fixed bug that caused 404s if cta target destroyed

###### Changes

- Fixed a bug that caused a 404 if the CTA targeting resource was destroyed


###### Closes:
 Unreported

###### #8552 - 20 combinaut hotfix

###### Changes

- Lowers the amount and total duration of animations on the home page. This will save CPU on the client side.
- updates margins on subheaders only attached to full-width section with images
- updates margins on hero images that are centered
- updates sizes of ol list items to match that of uls ![screen shot 2018-04-23 at 4 13 45 pm](https://user-images.githubusercontent.com/2073148/39147924-531cc880-4711-11e8-88dc-9b057d1f4be1.png) ![screen shot 2018-04-23 at 2 41 56 pm](https://user-images.githubusercontent.com/2073148/39147936-580ad972-4711-11e8-93b4-57b13f283946.png) ![screen shot 2018-04-23 at 4 15 44 pm](https://user-images.githubusercontent.com/2073148/39148016-9db6d872-4711-11e8-8931-29dcfd55a799.png)


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/60

###### #8559 -  Add quick add to category

###### Changes

- Added a quick-add modal for category selection


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/682

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"24e0bb90106a44c93bad73d2c5e4b04f006e03f3","commit_sha":"f3b2fe5e6a7c77d55689018c568026412ec9ec55"}}

## Deployed to: www.scrippsalpha.org (Mon Apr 23 23:49:25 2018)

#### Closed PRS:

###### #8560 - Do not show archived records in association lists

###### Changes

- in a list for associated records, do not show archived records.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/652

###### #8551 - Don’t page cache if there is a variant.

###### Changes
 We never want to page cache a page when we are overlaying a variant on top.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/685.

###### #8547 - Fix bug that caused invalid index page options

###### Changes

- Fix bug that caused invalid index page options


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/680

###### #8557 - Sorts labels

###### Changes

- moves selected labels to the top of the labels list so it is easy to uncheck selected labels.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/1

###### #8550 - Updates tooltip to read health and wellness

###### Changes

- we changed healthy life back to be health and wellness. Update tooltip.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/616

###### #8554 - Make www only search www

###### Changes

- Removes Giving from `www` Searchable Domains


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/641

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"b7d42944d73423b7e7d35fe92623f90913a7d77c","commit_sha":"cec645e6902adca68d508f42e64ad7f07d8c02e2"}}

## Deployed to: www.scrippsalpha.org (Mon Apr 23 21:17:03 2018)

#### Closed PRS:

###### #8555 - Use referer in SyncController instead of constructing a return URL.

###### Changes
 This avoids losing our place when we are in a nested index page.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/199.

###### #8546 - Fix bug that caused incorrect content to appear on unrelated pages

###### Changes

- Fixed a bug that caused content from an `Experiment` on a `Source` to appear on unrelated pages while in campaigns.


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/386

###### #8549 - Fix location browser router

###### Changes
 Locations are globbed so locations that were 3 levels deep were matching the `findWithinDistance` route instead of the `selectLocation` route. We fix this by adding the `coordinates` prefix to disambiguate. A previous fix partially addressed this but didn’t account for locations that were 3 levels deep. See https://github.com/combinaut/sparkle/commit/d964d309a93666d6b93242dcee33714333cdd178.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/639.

###### #8548 - 20 combinaut hotfix

###### Changes

- makes a blog helper file that references content_title to override titles as described in this pull request. https://github.com/combinaut/sparkle/pull/8507
- Makes the width of 95% for hero banners consistent for the whole component
- fixes the left and right overflows as shown in https://github.com/combinaut/sparkle-combinaut/issues/61 ![screen shot 2018-04-23 at 10 21 19 am](https://user-images.githubusercontent.com/2073148/39129358-ae607682-46e0-11e8-8454-4097d2c0f6ef.png)


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/61

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"1ab087d0012c02bb811b05b2ff4399f08f742ca4","commit_sha":"3b94bcb71e6e4e14fc23efe32a97eaa038e60d93"}}

## Deployed to: www.scrippsalpha.org (Fri Apr 20 23:40:29 2018)

#### Closed PRS:

###### #8545 - Fixes validation error

###### Changes

- When we left the Url Override blank, there was a validation error. This is because it is saved as an empty_string not as nil.


###### Closes:
 [unreported]

###### #8525 - 635 three column template tabs

###### Changes

- moves tabs builder out of admin so it is available on the front end.
- makes the three column template use tabs rather than links.
- alphabetizes the by_body_location list (headers).


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/635, https://github.com/combinaut/sparkle-scripps/issues/678

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"3811d0f7b17a6026c0c2d41199a858bb0d3f10fe","commit_sha":"e8f6b53cbd495203497bc920a36c879ebc5a4aec"}}

## Deployed to: www.scrippsalpha.org (Fri Apr 20 18:54:53 2018)

#### Closed PRS:

###### #8541 - Sparkle scripps 626 improve vanity alias ui

###### Changes

- Improve the label and hint for a custom vanity alias so as not to give the impression that the original `Page` path will still be valid. ![image](https://user-images.githubusercontent.com/87623/39018287-7ab40b54-43da-11e8-8f06-26408a49533f.png)
- Give the user a better indication of when a custom vanity alias is invalid ![image](https://user-images.githubusercontent.com/87623/39017757-f6bdeda2-43d8-11e8-9799-a39133e10dae.png)
- Remove page vanity aliases from the sidebar since they are an implementation detail of how the `/pages` is removed from `Page` paths. ![image](https://user-images.githubusercontent.com/87623/39018090-e3d75cb8-43d9-11e8-9a98-1e5e2d8a9222.png)


###### Closes:
 combinaut/sparkle-scripps#626, combinaut/sparkle-scripps#677

###### #8507 - 20 combinaut blog changes

###### Changes

- Updates the structure of the blogs,
- Adds in a background image asset placement
- More changes to come this is WIP ![screen shot 2018-04-12 at 6 36 09 pm](https://user-images.githubusercontent.com/2073148/38705710-d8764518-3e80-11e8-9a0a-22195b18683c.png)


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/20

###### #8537 - Fix aliasing on IndexPages with custom vanity path

###### Changes

- Fix aliasing on IndexPages with custom vanity path


###### Closes:
 https://github.com/combinaut/sparkle/issues/8536

###### #8539 - Fixes the logo on microsites

###### Changes

- chrome properly sets the height but other browsers do not.
- specifically set the background height.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/676

###### #8538 - Update to latest handlebars

###### Changes

- Fix intermittent `NoMethodError` exceptions when rendering handlebars templates


###### Closes:
 https://github.com/combinaut/sparkle/issues/8214

###### #8535 -  Fix bug that caused IE11 not to show lightbox pictures

###### Changes

- Fix bug that caused IE11 not to show lightbox pictures


###### Closes:
 https://github.com/combinaut/sparkle/issues/8527

###### #8523 - Fix content event publishing domains.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/662.

###### #8533 - Don’t render responsive preview when we are rendering text.

###### Changes
 When your review token is expired, we render a plain text string to let you know. The responsive preview gem was trying to wrap the responsive layout around it which doesn’t exist for `format: :text`.


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8529

###### #8526 - Fix Healthplan Sitewide Search

###### Changes
 * Necessary JS was not included * Autocomplete results ran under the breadcrumbs * Fix autocomplete returning links to pages we don't have in healthplan (locations#show, medical_groups#show). * Modernizr was included twice


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/664

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"95fa542c0a6609cfe3e1e00ee475b93542766a25","commit_sha":"620b3993f4546cbc6e4b28575c882a5c4045285f"}}

## Deployed to: www.scrippsalpha.org (Wed Apr 18 14:24:08 2018)

#### Closed PRS:

###### #8494 - 324 cobranded template

###### Changes

- Adding Cobranded Templates


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/324

###### #8522 - Fix 404 on links within campaigns to other domains

###### Changes

- Fix 404 on links within campaigns to other domains


###### Closes:
 Unreported

###### #8391 - Don’t explode if there is no area code.

###### Changes
 We are going to show a validation message instead. ![image](https://user-images.githubusercontent.com/7904/38751870-38a8ae0c-3f0e-11e8-98b8-c6c8d714f7ae.png) <hr> ![image](https://user-images.githubusercontent.com/7904/38753750-382ddcb2-3f14-11e8-80ba-351927cc23ac.png)


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/341

###### #8519 - Updates Hero Naviagtion Links

###### Changes

- changes link from Giving, to Locations.
- updates icon.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/636

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"5e52e0ec3a2ca64d20ccd1f74ecb023f3bcda239","commit_sha":"d36de92772fb40d85f270869f47f27fb27946764"}}

## Deployed to: www.scrippsalpha.org (Mon Apr 16 20:59:01 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"9c8e9222e05304ea1f83b3bf8f478875a8d63391","commit_sha":"d9cd28fbc861a62a05da5743caf95cdc35c51d32"}}

## Deployed to: www.scrippsalpha.org (Mon Apr 16 18:44:32 2018)

#### Closed PRS:

###### #8516 - Fix bug where visiting a promotion directly didn’t set the session variable

###### Changes

- Fix 404 when visiting a promotion directly


###### Closes:
 Unreported

###### #8515 - Fix cross domain promotions.

###### Changes
 We need the current publishing domain to remain the current one during the promotions#show redirect action otherwise we get a 404 when looking up the current promotion.


###### Closes:
 Part of fixing https://github.com/combinaut/sparkle-scripps/issues/642

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"f53e5aa2ae0f39e2c0b96aa37f14a08af39f85f7","commit_sha":"cc380ec71ea71f3affc6d9d7656ec15cbf684686"}}

## Deployed to: www.scrippsalpha.org (Mon Apr 16 16:18:42 2018)

#### Closed PRS:

###### #8511 - Sparkle scripps 642 fix alias scoping in campaigns domain

###### Changes

- Fix bug that caused 404s on campaigns in subdomains if they used aliases


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/642

###### #8512 - 615 hcmacid for assessments

###### Changes

- gives all resources access to `assessment_viewer`.
- creates a `current_hcmacid` that both form_submissions/assessment_form_submissions use.
- The behvaiour is to use the external hcmacid (if present), then to try to use the source hcmacid, and finally to use the hcmacid provided on the form or the assessment.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/615

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"d3eab1999fe6103ea50c3c42b0f36e2c4d72fb9a","commit_sha":"f88b64faa2d82811ba824aa08e6b2f8cb6d4a38e"}}

## Deployed to: www.scrippsalpha.org (Fri Apr 13 14:41:23 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"8175133d3587df73d655403375a916d8606fbcdf","commit_sha":"8175133d3587df73d655403375a916d8606fbcdf"}}

## Deployed to: www.scrippsalpha.org (Fri Apr 13 02:11:56 2018)

#### Closed PRS:

###### #8403 - Begin fixing header navigations

###### Changes

- rename the header navigations into easily definable `units`.
- try to create mixins that we can just grab when we need to construct the `units` as necessary (ie. `search-submit`, `search-icon`, `search-box`. Then in the widgets, we call these to construct the `expandable` or `search-box` style of search. Then the type of header defines what kind of search it uses.
- update `layouts/structure` rather than `layouts/shared`.
- change search_icon mixin to use the sparklets icon rather than trying to change the color of the svg. (Hard coding the svg is not rendered in firefox or ie).


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/469

###### #8502 - Fix Login Redirection

###### Changes
 This issue is the results of several bugs. **SubdomainRedirect needs to be above AccessVerification** Otherwise we run record_intended_url on the wrong domain and therefore `sparkle_intended_url` is not available after we log in (because cookies are not shared across domains). **Only record_intended_url when about to redirect to login** There is no reason to record the intended URL for every request. This was causing weird results because we would record requests like `/admin/current_edit`. **Don’t redirect_to_intended_or_default when already logged in.** We already know where we want to go because we haven't redirected. Should also fix: https://github.com/combinaut/sparkle-combinaut/issues/17#issuecomment-380845141


###### Closes:
 Closes https://github.com/combinaut/sparkle-combinaut/issues/17

###### #8505 - Adds a sync_without_confirm

###### Changes

- Adds `sync_without_confirm`. We do not have versions for these alias’s, the versions are the target records they point to. So we do not need to show the user that this is happening under-the-hood.
- Hides the `Director::Alias` changes from the visable checklist provided to the user on update but keeps it in the checklist that will actually rollback.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/638

###### #8504 - 48 combinaut feedback

###### Changes

- Videos play when the video is fully in view. ![playhead](https://user-images.githubusercontent.com/2073148/38696117-960c4fea-3e64-11e8-9d92-fa26c478d941.png)


###### Closes:
 hotfix

###### #8495 - 48 combinaut production checklist

###### Changes

- On tablet and above change the margin-top of subtitles
- fix margins on the section with image and section with video on mobile
- vertically center the mobile menu button and limit its width to no more than 34px. ![screen shot 2018-04-11 at 11 30 02 am](https://user-images.githubusercontent.com/2073148/38623328-c5b1f310-3d7b-11e8-8082-ecffcfb25e40.png) ![screen shot 2018-04-11 at 11 29 54 am](https://user-images.githubusercontent.com/2073148/38623329-c5c47882-3d7b-11e8-8b2a-874d01072219.png) ![screen shot 2018-04-11 at 11 23 52 am](https://user-images.githubusercontent.com/2073148/38623338-ca35bf16-3d7b-11e8-9b4a-970d1c3a1620.png) ![screen shot 2018-04-11 at 11 23 43 am](https://user-images.githubusercontent.com/2073148/38623339-ca4890dc-3d7b-11e8-98cc-ae73292fb35f.png)


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/46

###### #8476 - Lock system page slugs

###### Changes

- Prevent users from editing the slug of system pages


###### Closes:
 Unreported

###### #8493 - 38 combinaut feedback2

###### Changes

- Fixes two minor bugs in the CSS, one is arrows were still appearing in the hero banner. Second is a new unreported bug with PB with a fix I just made. This prevents scaling of curves on PB where it's not needed ![screen shot 2018-04-10 at 5 13 45 pm](https://user-images.githubusercontent.com/2073148/38581218-8e6df15e-3ce2-11e8-9876-4d542e69486d.png)


###### Closes:
 hotfixes

###### #8383 - Refactor of Layouts

###### Changes

- Begin simplifying the `html` and `css` of layouts.
- create template names that match the css files and vice versa.
- flips header


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/401, https://github.com/combinaut/sparkle-scripps/issues/616, https://github.com/combinaut/sparkle-scripps/issues/392

###### #8454 - Combinaut Videos to replay after scrolling back

###### Changes

- videos will now play once when in a scroll position then play again once out of that scroll range and scrolled back to
- on load, if the page is already scrolled to the position where the video is then play the video
- Check the movie linked below for more details. https://drive.google.com/file/d/1UAOcicGbWYgY3w6pwOiGZdVLK4PuucCz/view?usp=sharing


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/27

###### #8489 - 38 combinaut feedback2

###### Changes

- Adds breakpoints to the foreground cover
- Fixes for margins on mobile buttons
- Have updated vertical positioning of button in the header ![screen shot 2018-04-09 at 7 53 45 pm](https://user-images.githubusercontent.com/2073148/38527164-c13f672e-3c2f-11e8-95c6-a259543b9aa8.png) ![screen shot 2018-04-09 at 7 51 36 pm](https://user-images.githubusercontent.com/2073148/38527172-c903063c-3c2f-11e8-838f-4acc13b2fa39.png) ![screen shot 2018-04-09 at 7 54 26 pm](https://user-images.githubusercontent.com/2073148/38527321-74bb36c0-3c30-11e8-900b-b1dabed93f5f.png)


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/38

###### #8490 - Updates how we look for page_builder_base_path

###### Changes

- The issue was promotion’s with a resource that had a vanity_url was not working correctly. We turn off looking for alias’ in page_builder mode. This means that promotions that have a `resource` with a vanity url, are not rendered in page_builder mode.
- Update the url for `page_builder_base_path`, the base url for page_builders iframe. For Promotion and Source, rather than only using the target, first try to find the resource attached to the promotions non-vanity url, then try preview_path then try the target.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/627

###### #8486 - Update Physician Disclaimer

###### Changes

- updates the physician disclaimer based on request in ticket: https://github.com/combinaut/sparkle-scripps/issues/620


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/620

###### #8487 - Fix bug where elements could not be reordered

###### Changes

- Fix bug where components could not be reordered within the same row


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/44

###### #8485 - update on the cropping values to new settings

###### Changes

- Updates new cropping settings provided by @jbraem
-
-


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/39

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"d3cf937c3b93a26a9c1f43bf20baf39c9beab8cf","commit_sha":"a12eb06ab97ceca54d1fcc613849b7974e8269f8"}}

## Deployed to: www.scrippsalpha.org (Mon Apr  9 16:14:22 2018)

#### Closed PRS:

###### #8460 - Add Panel Status to healthplan DF.

###### Changes
 ![image](https://user-images.githubusercontent.com/7904/38441210-f6729ebe-39b1-11e8-8a4e-0d7082ee1ecf.png) <hr> ![image](https://user-images.githubusercontent.com/7904/38441226-01c62236-39b2-11e8-8c37-1265ce91d968.png)


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/605

###### #8483 - Fix chapter public_path.

###### Changes
 This should fix the sitemap. I still feel we should just remove publications. Underused features always end up buggy and forgotten. See https://github.com/combinaut/sparkle/issues/8482


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8428

###### #8484 - 38 combinaut feedback2

###### Changes

- Fixes Safari specific vertical gap issue
- Adds border-bottom to global nav groups
- subtitles on hero banners now have the same styles as their section with image counterparts
- the mobile menu will now freeze scrolling while open to prevent the user from scrolling the header away. unfreezing after closing the mobile menu
- Adds in the crop points as listed by @jbraem ![screen shot 2018-04-09 at 11 06 33 am](https://user-images.githubusercontent.com/2073148/38508271-213be502-3bf5-11e8-9439-181b1ce86327.png) ![screen shot 2018-04-09 at 11 02 26 am](https://user-images.githubusercontent.com/2073148/38508272-21532ce4-3bf5-11e8-99d1-2ab09b47e48d.png) ![screen shot 2018-04-09 at 11 01 52 am](https://user-images.githubusercontent.com/2073148/38508273-21663fa0-3bf5-11e8-929d-928f2606be1b.png) ![screen shot 2018-04-09 at 1 03 06 pm](https://user-images.githubusercontent.com/2073148/38508744-60018430-3bf6-11e8-9c5d-e1a8c81d41a2.png)


###### Closes:
 *Comma separated list of closed issue links*

###### #8481 - Fix CampaignTacticBuilder with blank URL.

###### Changes
 It is possible for a submission not to have a `source_url` (non-campaign form without an HTTP referer). We need to handle this case.


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8480.

###### #8466 - Sparkle 8463 optimize page saving

###### Changes

- Sped up saving of pages with many descendants


###### Closes:
 https://github.com/combinaut/sparkle/issues/8463

###### #8478 - Fix contact page.

###### Changes
 We shouldn’t be routing to pages#show without providing an id. After removing this route scripps uses an existing legacy redirect to redirect `/contact` to `/about-us/contact`. This meant I had to remove the one page that `contact_url` was used in the view. We should really be switching all of these to nav groups. These is an ops ticket for that (https://github.com/combinaut/sparkle-scripps/issues/447).


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8468

###### #8472 - Adding not a lead form.

###### Changes
 ![image](https://user-images.githubusercontent.com/7904/38432089-5ea78d50-3994-11e8-82ca-be3fc7cd6c2b.png) <hr> ![image](https://user-images.githubusercontent.com/7904/38432096-65b75288-3994-11e8-9a9a-69be81004038.png) <hr> ![image](https://user-images.githubusercontent.com/7904/38432118-72c6d782-3994-11e8-9e0f-9ca51aa78d97.png) <hr> ![image](https://user-images.githubusercontent.com/7904/38432152-9081ccf0-3994-11e8-99d1-960280d50105.png)


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/372.

###### #8469 - Don’t resolve archived `PageAlias` aliases in sandbox

###### Changes

- Don’t resolve archived `PageAlias` aliases in sandbox


###### Closes:
 https://github.com/combinaut/sparkle/issues/8464

###### #8474 - Updated Rehearsal

###### Changes

- updated rehearsal


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/608, https://github.com/combinaut/sparkle/issues/8457

###### #8473 - 33 combinaut foreground cover

###### Changes

- Makes RandomId a helper. It is only used in one place however this feels a lot cleaner to have the functions be stored in one helper
- Dry-ed up all the functions in the responsive image helpers.
- Removes foreground image helper, unused now
- Adds variant images for fallback image support
- Changes don't appear to adversely affect other clients ![screen shot 2018-04-06 at 1 36 22 pm](https://user-images.githubusercontent.com/2073148/38432959-8cd1f03e-399f-11e8-81c9-3a42b0ea913e.png)


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/33

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"f59410ffe948adfc0f2a883604244f959bf09d32","commit_sha":"79fb626289b5a98dd04bad89939a84ba22b74c15"}}

## Deployed to: www.scrippsalpha.org (Fri Apr  6 00:46:18 2018)

#### Closed PRS:

###### #8465 - Delayed Jobs not sending Forms Correctly

###### Changes

- Delayed Jobs cannot deserialize records that are not saved. This means we cannot just give it an object like I did in PR: https://github.com/combinaut/sparkle/pull/8389/files source: https://github.com/collectiveidea/delayed_job/wiki/Common-problems#DJ_doesnt_deserialize_an_unsaved_ActiveRecord_model
- update to call `to_salesfoce` in the actual processing of the salesforce form. This way the delayed job gets the Active Record for the FormSubmission.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/603

###### #8451 - Fix responsive variants for non-standard image component attributes

###### Changes
 Responsive image variants weren’t working for component attributes other than those named explicitly `image`. We now use `ComponentTemplate` to look up all relevant attributes using the image-editor tool.


###### Closes:
 Closes https://github.com/combinaut/sparkle-combinaut/issues/26

###### #8453 - Cache SparkleClient file lookup contexts

###### Changes

- Cache SparkleClient file lookup contexts


###### Closes:
 https://github.com/combinaut/sparkle/issues/8452

###### #8450 - Fixes Physician import error of locations

###### Changes

- The issue was that we were trying to find by the old slugs which no longer exist (ie `scripps-clinic__scripps-clinic-torrey-pines` is not just `scripps-clinic-torrey-pines`).
- Update to use Location Ids rather than slugs.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/604

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"cb872293db9bc3325aca9c4d224c08a4af3c4e29","commit_sha":"5b1032cd051eb8f0f0b2b8d0aa33c7abe9b3d5e4"}}

## Deployed to: www.scrippsalpha.org (Wed Apr  4 21:09:03 2018)

#### Closed PRS:

###### #8427 - Sparkle 587 - Prevent future bar links from leaving sandbox

###### Changes

- Prevent future bar links from leaving the sandbox


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/587

###### #8436 - Improve Alias/LegacyRoute interaction

###### Changes

- Fixed issue that caused incorrect resource to appear in the page builder editor window
- Prevent aliases from affecting the live site when the record is drafted or archived
- Fix issue where redirects would not match if a the request url was aliased (vanity path or PageAlias via proxy handler)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/593, https://github.com/combinaut/sparkle-scripps/issues/589

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"feda7783b59a128f784d4eb9c2386ad22f7448a2","commit_sha":"9cc4beb7c95ccc63a5e45532a9ee485eeb1c3fe8"}}

## Deployed to: www.scrippsalpha.org (Wed Apr  4 18:32:33 2018)

#### Closed PRS:

###### #8440 - Fixing messages

###### Changes

- Fixes message views
- fixes next/previous button
- automatically marks messages as read if viewed by recipient user
- adds bulk actions to mark as read, flagged and replied
- introduces reverse actions in index view


###### Closes:
 Unreported

###### #8443 - Fix page caching with vanity aliases.

###### Changes
 We need to do two things: * Override the cache_path method to write to the correct path on the hard drive. * Adjust the `valid_url?` method to consider the original_path instead of the current one.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/598

###### #8419 - Add aggregate reports to campaigns

###### Changes

- shows performance of all campaign sources
- break up tabs
- remove dependency on page builder
- show tabs when reports are enabled, even if there is no page builder


###### Closes:
 Unreported

###### #8433 - Adds a scope to for `included_in_navigation`

###### Changes

- service names belong to services, and whether or not they are visible should depend on whether or not the service is visible.
- add a scope to `service_name` to check if the `service` it belongs to should be `included_in_navigation`.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/586

###### #8421 - Prevent path methods from showing unwanted params

###### Changes

- Prevent path methods from showing unwanted params


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/583

###### #8430 - Fix publishing domain detection when on campaigns domain.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/591

###### #8420 - Restrict vanity path to admin users

###### Changes

- only show vanity path customization to managers and Admins
- use vanity path as placeholder


###### Closes:
 Unreported

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"4559e7a5dcb2c5f64c7e1d32480c6f9a7ac3c2d6","commit_sha":"a2a6c6498dcd0464bae5e0386e033aaf4f5d969b"}}

## Deployed to: www.scrippsalpha.org (Mon Apr  2 20:21:43 2018)

#### Closed PRS:

###### #8417 - Adds controller tests

###### Changes

- makes sure that index pages for forms/form_submissions work.


###### Closes:
 [unreported]

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"274555882244105205683340ffe2ca63a394fc1d","commit_sha":"ac15cc3e7afdbfa160c7828b105cdda2f7646875"}}

## Deployed to: www.scrippsalpha.org (Fri Mar 30 19:14:13 2018)

#### Closed PRS:

###### #8412 - Fix home page links.

###### Changes
 Use the existing vanity_path functionality to correct the home page URL. The old way (calling root_path) didn’t work when we provided a `routing_type`. This seems a bit more in line with the current idea of how we do things as well.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/574

###### #8409 - Forms/Form Submissions Index pages broken

###### Changes

- neither of forms nor form_submissions have public_paths nor preview paths but we do want users to be able to go to say `http://sandbox.sparkle.test:3000/admin/forms/19678/form_submissions` to view all the form submissions of a specific form.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/576

###### #8407 - Theme fixes

###### Changes

- Fix 500 when no theme colors present
- add array_for lookup
- move themes to domain file


###### Closes:
 #8405, combinaut/sparkle-combinaut#24

###### #8401 - Fix label creation.

###### Changes
 JSON no longer includes root node. See controller test here https://github.com/combinaut/sparkle/blob/02d503fd1930440e9a81e00e05b355538567c03c/spec/controllers/admin/labels_controller_spec.rb#L22. Unfortunately it didn't help us in this case since we have no JS test.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/572.

###### #8400 - Creates a handlebar helper to strip P tags

###### Changes

- makes it easy to remove `p tags` in places other than just the title.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/571

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"02d503fd1930440e9a81e00e05b355538567c03c","commit_sha":"bb378bfb0be92aada97c1d1f4c9aac5fd41551bd"}}

## Deployed to: www.scrippsalpha.org (Thu Mar 29 18:19:05 2018)

#### Closed PRS:

###### #8393 - Pages can now define a custom vanity alias

###### Changes

- Users can override the vanity path of a `Page`
- Preview path now uses the vanity path


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/556 https://github.com/combinaut/sparkle-scripps/issues/557

###### #8398 - Fix form copying.

###### Changes
 JSON endpoint no longer includes root `form` key.


###### Closes:
 Issue reported by Rex when converting shared form component to unique.

###### #8389 - 552 assessment form submission issues

###### Changes

- Normalize the data before we pass it to form_processor.
- Makes sure all the data we need is present before passing it to salesforce.
- prevents us from having to `try` all our methods, we know its been standardized and its a method we can call.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/552

###### #8396 - Get the body locations of self/descendents

###### Changes

- the cancer care team want a child's body-systems to be listed on the three-column index.
- set the body_location current_collection to include all the descendants of the current_collection.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/383

###### #8397 - 13 combinaut feedback

###### Changes

- Allows for Favicons to be set on a per publishing domain basis
- Sets of touch icons and favicons for sparkle
- Fix for responsive menu
- Adds in a number of justin's changes from https://github.com/combinaut/sparkle-combinaut/issues/15
- Able to click on sparkle icon to head back to the homepage ![screen shot 2018-03-28 at 5 29 57 pm](https://user-images.githubusercontent.com/2073148/38089401-b2ecf0a4-3335-11e8-83f3-837105d39097.png) ![screen shot 2018-03-29 at 9 52 14 am](https://user-images.githubusercontent.com/2073148/38089749-e36b78e4-3336-11e8-9749-8ec5e52c9659.png)


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/15

###### #8392 - Update partial path method

###### Changes

- update partial path method to not use the router.
- update index_slug to simplify way we get the table_name.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/570

###### #8390 - Update to latest stagehand

###### Changes

- Fix stagehand delete and insert with unique index sync issue


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/565

###### #8375 - 13 combinaut feedback

###### Changes

- Should fix animations, but disables image compression to do so.
- Contact forms have their styling on the desktop but need more considerations for mobile and tablet
- fixes the graphics error where some curves would have a small line appear under them
- All forms elements are now grouped under a div
- Fixes theme select controls by adding in an admin.scss file to the client application. This used to overcome a relative pathing issue with sass, where since the root file is being loaded from the base application the first path checked seems to be the relative path. This solution ensures the relative path is always the client first
- Adds in UI for the blog filter selection @njakobsen needs for https://github.com/combinaut/sparkle-combinaut/issues/15
- updated to include a fix for https://github.com/combinaut/sparkle-combinaut/issues/19 ![screen shot 2018-03-26 at 4 48 36 pm](https://user-images.githubusercontent.com/2073148/37929165-9325969e-3115-11e8-913f-0d6bdd66261f.png) ![screen shot 2018-03-26 at 4 25 07 pm](https://user-images.githubusercontent.com/2073148/37928160-48700a74-3112-11e8-8b85-46f426063b99.png) ![screen shot 2018-03-27 at 10 15 30 am](https://user-images.githubusercontent.com/2073148/37969722-d25f9246-31a7-11e8-9fc4-2fbcb69ca74e.png)


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/19

###### #8387 - Fixes Assessments CRM Issues

###### Changes

- assessments do not have fields, so we only want to try and get the referring/receiving NPI provider if fields exist.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/552, https://github.com/combinaut/sparkle/issues/8361

###### #8385 - Add a prefixed pages route to fix index children.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/567.

###### #8379 - Contain Iframe width in Related Content

###### Changes

- add a width to the iframe of 100%. This will contain the iframe in its box.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/488

###### #8384 - Redirect promotions

###### Changes

- Forward non-promotions to correct base URL


###### Closes:
 combinaut/sparkle-scripps#566

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"7dd51dd70bcd6db5f1612db84ede128d26e93b67","commit_sha":"ae3b570d0b72ff45dda1d26b26f946b681301b91"}}

## Deployed to: www.scrippsalpha.org (Mon Mar 26 22:54:44 2018)

#### Closed PRS:

###### #8378 - Initialize physician instead of create

###### Changes

- Fixes issue where addresses were not being saved on the physician correctly.
- The issue was on the first save, there are no addresses attached, so we did not set an address on the physician, we then set `geocode_updated` to be true, preventing on the second save, when an address is present, to correctly geocode the address to the physician.
- Do not need to save physician twice right after each other.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/524

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"797d221b056d003ce86928c03ba442d909ec8ca7","commit_sha":"05d688534d73aa3f34fc6e475c6637cbf58ee47e"}}

## Deployed to: www.scrippsalpha.org (Mon Mar 26 21:24:02 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"c54974268b0ad23e8e1730b39f77f691f7ba2345","commit_sha":"03c8e3047e6fa31856d5b07d35f63c66f063df51"}}

## Deployed to: www.scrippsalpha.org (Mon Mar 26 20:46:54 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"ac2a7e9095c7cc525cc01f816f32faef120af609","commit_sha":"ab2f8b5ec3843f49a13034d50cc28a72f43e22ec"}}

## Deployed to: www.scrippsalpha.org (Mon Mar 26 18:52:09 2018)

#### Closed PRS:

###### #8372 - Don’t use default scope.

###### Changes
 The default scope code block is run before `PublishingDomain.current` has been set when code is eager loaded. Use a before save instead so we can continue to use `PublishingDomain.current!`. Damn you `default_scope`. Your siren song is always so tempting.


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8371

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"60d92936ce35471f18ae2779db9d06d619321c7c","commit_sha":"8f97512a9e4e6b900f194fc4bc2fba34de54cabf"}}

## Deployed to: www.scrippsalpha.org (Sun Mar 25 20:10:54 2018)

#### Closed PRS:

###### #8365 - Keep vanity URLs up to date.

###### Changes
 Need to update vanity URLs when: * parents change * associated entity changes * parents of the associated entity changes @njakobsen can you think of any other situations?


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/555

###### #8368 - Only use original_target_url if we are still in a promotion.

###### Changes
 Since the session cookie is shared across all domains, we were setting the source_url to the last promotion the user visited when they were no longer on the campaigns domain.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/559

###### #8367 - Fix thank you page redirect.

###### Changes
 Now that page slugs don’t contain their parents, we need to scope the default thank you page lookup to only search at the root level. This was probably something we should have been doing before anyhow.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/558.

###### #8370 - Update to latest Director

###### Changes

- Fix issue where redirect aliases didn't change the url if they were part of the


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/547

###### #8363 - Scope alias lookups by publishing domain

###### Changes

- Alias lookups are now scoped by domain


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/550

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"0337827e8332c6996397fa8df487769e1947e48d","commit_sha":"1e62afe2f8ee372b260e024fb6ca538a5a405780"}}

## Deployed to: www.scrippsalpha.org (Sat Mar 24 23:52:43 2018)

#### Closed PRS:

###### #8360 - General CSS Fixes

###### Changes

- gives extra padding to fix placement of chevron in the active blue box
- gives some margin after a button in shared-components so the override-text does not overlap with the button


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/430, https://github.com/combinaut/sparkle-scripps/issues/409

###### #8364 - 544 admin messages 500

###### Changes

- we were saving the resource type as the resource’s class but in the case of `ResourcePresenters::ResourceIndex` we really want to save the associated models class name. (In the case of: http://sparkle.test:3000/services/orthopedics/services, this should have a resource_type of “Page”)
- Updates FormSubmissions with ResourceIndex to Page


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/544

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"2e396404e792a750e7e14a301cbcf30e5ff0c12e","commit_sha":"876d8d1e386921d4ad01d9a604cc6eb98ea8d75d"}}

## Deployed to: www.scrippsalpha.org (Fri Mar 23 21:04:34 2018)

#### Closed PRS:

###### #8362 - Fixed bug where PageAlias didn’t delete its outgoing alias when converted

###### Changes

- Fixed bug where PageAlias didn’t delete its outgoing alias when converted to another type


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/542

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"940b04c716723feb451f974c9a92f628e129feae","commit_sha":"66872590a7b942ab7d872201bfbca634ac444598"}}

## Deployed to: www.scrippsalpha.org (Fri Mar 23 20:51:30 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"9566f76908754bb004e241dd5b817afd80d1230f","commit_sha":"cac8baa097bc9cea5558cb8a9afcfb9166253102"}}

## Deployed to: www.scrippsalpha.org (Fri Mar 23 19:08:47 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"15941ecb6d92fcea8806add22e1979c779078db9","commit_sha":"174ad97bdf6f51387a51d87d45d0edd350666044"}}

## Deployed to: www.scrippsalpha.org (Fri Mar 23 17:22:23 2018)

#### Closed PRS:

###### #8358 - 13 combinaut feedback

###### Changes

- Crossing off the code related changes listed in the following ticket https://github.com/combinaut/sparkle-combinaut/issues/15
- this also has template changes for blogs and posts
- requires https://github.com/combinaut/sparkle/pull/8340 to be merged ![sparkle sparkle test_ 2](https://user-images.githubusercontent.com/2073148/37806220-9d7c7b1c-2e1d-11e8-955c-6d12777e4519.png)


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/15

###### #8311 - Use tools to determine correct asset links

###### Changes

- Use tools to determine correct asset links
- Current detection is insufficient


###### Closes:
 combinaut/sparkle-combinaut#14

###### #8340 - Combinaut mobile styles are in on the home page

###### Changes

- Combinaut now has its own copy of the responsive JS files. This is because the mobile menu calls for elements that are structurally not apart of `.primary-nav-featured`. This needed another jQuery call inside the mobile menu js files to grab these elements. re: our conversation about global JS affecting other clients, combinaut and sparkle.combinaut will now call this file rather than the global.
- Style updates to hero-banners section-with-image/video
- Footer is updated to show the shorter version ![simulator screen shot
- iphone 8
- 2018-03-21 at 12 21 29](https://user-images.githubusercontent.com/2073148/37719015-cf8a146e-2d02-11e8-880d-d547f2bed210.png) ![simulator screen shot
- iphone 8
- 2018-03-21 at 12 22 02](https://user-images.githubusercontent.com/2073148/37719020-d243466c-2d02-11e8-85d3-0929f667321c.png)


###### Closes:
 Hotfixes

###### #8353 - Add underscore route handler.

###### Changes
 As a last resort (after legacy routes, etc.), we attempt to prevent a 404 by changing an old-style underscore route into a slash delimited route.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/535

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"5c68f8ba5fc4de0c8b018ca57e577097f08fd631","commit_sha":"ad5f6c1610c5fd9c5113d97e85fa42f675cf0397"}}

## Deployed to: www.scrippsalpha.org (Thu Mar 22 21:31:36 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"c7ca7f82d6ad0f2f9f10c2cb4e4ff7de9fe48988","commit_sha":"c7ca7f82d6ad0f2f9f10c2cb4e4ff7de9fe48988"}}

## Deployed to: www.scrippsalpha.org (Thu Mar 22 21:13:06 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"460f43b9407792ffbe21364340458830b2496085","commit_sha":"460f43b9407792ffbe21364340458830b2496085"}}

## Deployed to: www.scrippsalpha.org (Thu Mar 22 20:41:50 2018)

#### Closed PRS:

###### #8352 - Fixed bug where index pages with default slug didn’t route as desired

###### Changes

- Fixed bug where an index page without a custom slug didn't route to the corresponding controller#index


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/533

###### #8349 - Fix index children.

###### Changes
 We have to remove the old unprefixed behaviour and instead rely on vanity paths to achieve this.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/532.

###### #8348 - Fix services#featured

###### Changes
 In the `services#featured` action, `Service` models are passed into `/services/_service.html.erb` instead of `ServiceName` models. This is also the case in production, but used to be covered up because `services#featured` never had `location_or_medical_group` and so `.service` would not be called. See https://github.com/combinaut/sparkle/blob/81306253bff80ffcc985c0c8e543281fe8123eab/app/helpers/services_helper.rb#L8


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8341. Closes https://github.com/combinaut/sparkle-scripps/issues/531.

###### #7970 - Initial Call Recording.

###### Changes
No Changes included in the log


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/239

###### #8350 - Add a rake task to create report on updates

###### Changes

- Adds a rake task to create report on updates


###### Closes:
Nothing Closed

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"73902b5aff88f497af71a843b2570db65564a0a4","commit_sha":"83d64d3f9540d55013342d71c4b43ad83b540136"}}

## Deployed to: www.scrippsalpha.org (Thu Mar 22 15:16:28 2018)

#### Closed PRS:

###### #8345 - Don't use vanity numbers by default

###### Changes

- new defaults setting `use_vanity_numbers_by_default` which controls if phone numbers should be displayed as vanity numbers by default
- set general default to true
- disable for all Scripps domains
- specifically set navigation phone numbers to use vanity numbers


###### Closes:
 combinaut/sparkle-scripps#529, combinaut/sparkle-scripps#480

###### #8346 - Updates Healthy life Urls

###### Changes

- updates healthy life urls
- missed a couple from https://github.com/combinaut/sparkle-scripps/issues/513


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/528

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"5f12da5d57e239388ccad5e561fd6d396747273e","commit_sha":"2853141aa1ccf26c3b94b58a17be9f201739af92"}}

## Deployed to: www.scrippsalpha.org (Thu Mar 22 00:08:57 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"9017ef0a092ef4c0dec870058b9cc4f8a9584434","commit_sha":"c0932fc07424856c43b25a8ad6f4f1518c654e0f"}}

## Deployed to: www.scrippsalpha.org (Wed Mar 21 22:09:00 2018)

#### Closed PRS:

###### #8342 - Fix index page aliasing issues

###### Changes

- Fixes bug where `services/cancer-care/services` page didn't alias correctly. You will probably need to convert this to a regular page, clearing the custom `services` slug, and then try again.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/526

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"e6c87e2ee3d1ebeeadb9f52d37f9d69b45cdf88b","commit_sha":"4153f1182c090769e173847dd5c0add37694bd89"}}

## Deployed to: www.scrippsalpha.org (Wed Mar 21 17:44:25 2018)

#### Closed PRS:

###### #8336 - Syncs active promotion count with `:promotion` behaviour

###### Changes

- removes `:promotion` behaviour from blogs/specialties. Blogs are just an index page for posts, and specialties are just an index page for doctors. I do not see a value in creating a promotion for these
- adds `active_promotion_count` to ClinicalTrials and to EntityServices. As of right now, there are no promotions attached to these `types` of things, but users may want to create a promotion on one of them and to do this requires an `active_promotion_count` column. Related to https://github.com/combinaut/sparkle/issues/8307


###### Closes:
 [Unreported]

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"59cbe615bfaada66876ccffabb2a776095b37e58","commit_sha":"b008e762cef9bba1661d8aa29a69cc2e013de66b"}}

## Deployed to: www.scrippsalpha.org (Tue Mar 20 21:14:06 2018)

#### Closed PRS:

###### #8324 - Removes Search Capabilities on Specialty

###### Changes

- we have disabled search on specialties for scripps (https://github.com/clouie87/sparkle/blame/master/clients/scripps/config/www/defaults.yml#L6).
- We should not include the search box if the search is disabled per domain.
- Creates a helper to check to see if the search has been disabled. Does not render search box if the search is disabled.


###### Closes:
 https://github.com/combinaut/sparkle/issues/8031

###### #8328 - Adds Active Promotion Count to Physicians

###### Changes

- We did not have `active_promotion_count` on physicians which caused an error when we tried to `update_target_counter_cache`.
- Add a column `active_promotion_count` to Physicians table.


###### Closes:
 https://github.com/combinaut/sparkle/issues/8307

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"12ffa09549fab5aeb90936241a8f589c05e20c06","commit_sha":"c63186e68fe2d98e1152f3b06d8f7d14c44d2629"}}

## Deployed to: www.scrippsalpha.org (Tue Mar 20 20:55:21 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"321cfa8a2437189f4fdc9fee928d7366a48cd434","commit_sha":"98b6e2900858f51d46d206e029e31243c56ee042"}}

## Deployed to: www.scrippsalpha.org (Tue Mar 20 20:23:24 2018)

#### Closed PRS:

###### #8331 - combinaut section with images and expandable content

###### Changes

- New setting to allow the user to choose on the section with images if the image should be set to 100% of the available area or to use the physical dimensions of the image up to 100% of the available area. Basically allows the image to be specific pixel size. This is needed on the make page
- Expandable sections can have a section title now allowing for better grouping
- Expandable sections styles have also been updated.
- Fixes issue in page builder where hero banner cta's would be too far left ![screen shot 2018-03-20 at 3 18 54 pm](https://user-images.githubusercontent.com/2073148/37674703-33b6a0f8-2c52-11e8-9bbb-ef419a946d6f.png) ![screen shot 2018-03-20 at 3 05 18 pm](https://user-images.githubusercontent.com/2073148/37673967-697c1922-2c50-11e8-8a7a-f4a00750b899.png) ![screen shot 2018-03-20 at 3 04 42 pm](https://user-images.githubusercontent.com/2073148/37673968-698db4de-2c50-11e8-96d0-585f1f331079.png)


###### Closes:
 Hotfix

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"859df9503d3f5100daed89c35d6e42d710b072c2","commit_sha":"ade5e63b278e7712c9c476548b13a8ef2eaebf4e"}}

## Deployed to: www.scrippsalpha.org (Tue Mar 20 17:51:59 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"784114a59fe1ec879af384b6bcad3a267e5f6a6c","commit_sha":"31bf0d43e688cbf4037e03d5d60ce4996a6659e0"}}

## Deployed to: www.scrippsalpha.org (Tue Mar 20 17:33:39 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"784114a59fe1ec879af384b6bcad3a267e5f6a6c","commit_sha":"784114a59fe1ec879af384b6bcad3a267e5f6a6c"}}

## Deployed to: www.scrippsalpha.org (Tue Mar 20 03:15:44 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"6a92e77a4d2079db2dc5e3f5b1d563546f66cc50","commit_sha":"79085b573fe3d98457f3ceae3efbf2b5366fc238"}}

## Deployed to: www.scrippsalpha.org (Tue Mar 20 01:26:40 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"6a92e77a4d2079db2dc5e3f5b1d563546f66cc50","commit_sha":"378d6c2ed80087995888311dcc4bbcb7c12ab920"}}

## Deployed to: www.scrippsalpha.org (Tue Mar 20 01:11:20 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"6a92e77a4d2079db2dc5e3f5b1d563546f66cc50","commit_sha":"313149b67993e222aeee28f4be8080cf951d49d1"}}

## Deployed to: www.scrippsalpha.org (Tue Mar 20 01:01:43 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"6a92e77a4d2079db2dc5e3f5b1d563546f66cc50","commit_sha":"6a92e77a4d2079db2dc5e3f5b1d563546f66cc50"}}

## Deployed to: www.scrippsalpha.org (Tue Mar 20 00:35:05 2018)

#### Closed PRS:

###### #8134 - Everything is a page

###### Changes

- Public paths now use the Rails router instead of being assembled manually
- Nested records `to_param` returns a globbed param with ancestor slugs, e.g. `hospitals/scripps-green/cancer-ward` allowing nested slugs to no longer include all their parents.
- Pages have vanity paths that allow full control over their public path. This is used to remove the `/pages` where it would otherwise be impossible due to being nested under a globbed parent resource
- Switched to ids for records on the backend


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/375, https://github.com/combinaut/sparkle-scripps/issues/394, https://github.com/combinaut/sparkle-scripps/issues/372

###### #8304 - Update Counties to have standard Header Style

###### Changes

- I think some Locations were created by hand or through a seed after the initial scrape. These had the wrong Counties Served Header Style.
- Updates Counties Served to have the correct header style throughout site.


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/376

###### #8323 - 13 combinaut home content

###### Changes

- Removes the need to set a height for the hero banners. There is still a setting for setting content text to be larger like how the homepage has it.
- Adds margins to the text centered hero banners so they can compensate for not having a set height. inner content here is also set to be centered
- full-width sections with images components are now not broken as they were before. Margins are also adjusted here. <img width="899" alt="screen shot 2018-03-19 at 3 37 56 pm" src="https://user-images.githubusercontent.com/2073148/37615241-8b9af246-2b8b-11e8-9251-c04f5696455a.png"> <img width="864" alt="screen shot 2018-03-19 at 3 37 40 pm" src="https://user-images.githubusercontent.com/2073148/37615242-8baddeba-2b8b-11e8-8fc3-96fab1b99b12.png"> <img width="1234" alt="screen shot 2018-03-19 at 3 30 57 pm" src="https://user-images.githubusercontent.com/2073148/37615243-8bcc43f0-2b8b-11e8-9f35-ab1e6963f282.png">


###### Closes:
 Hotfix

###### #8220 - Improve page aliasing

###### Changes

- Allow all pages to change title, nickname, and slug, regardless of locked status (except homepage)
- Convert all existing index pages to an appropriate `IndexPage` subclass.
- Pages will automatically be converted to an appropriate `IndexPage` subclass when a slug is changed
- (TBD) `ResourceIndex` index page lookups will result in a 404 if no corresponding `IndexPage` is found


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/38, https://github.com/combinaut/sparkle-scripps/issues/378

###### #8312 - Fixes modal appearance on Combinaut

###### Changes

- Modal styles are required for all clients, as scripts like forms.js.erb and the CTA scripts run on all clients regardless if they are used or not.
- In initialization, modal.js adds new elements and a parent class to the dom. Depending on this parent class it does activate some in some CSS in buttons.scss causing the button to appear
- This adds the base modal styles to combinaut fixing the issue <img width="1385" alt="screen shot 2018-03-19 at 9 59 26 am" src="https://user-images.githubusercontent.com/2073148/37596850-42a9fc46-2b5c-11e8-9080-5a321acc8a29.png">


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/13

###### #8313 - Home page hero issues

###### Changes

- Changes the margins and appearance of the p tags that appear in the title content.
- Removes padding on text captions of hero banners so the align properly
- Updated AJAX request so the browser can decide what protocol to use depending on where the site is run, HTTP or HTTPS <img width="1424" alt="screen shot 2018-03-19 at 1 10 52 pm" src="https://user-images.githubusercontent.com/2073148/37607690-8171d942-2b77-11e8-989e-c8507978d95e.png">


###### Closes:
 hotfix

###### #8310 - Removes sidebar buttons from scripps for CTAs

###### Changes

- Makes a configuration option so that other clients are not affected
-
- Gone on Scripps <img width="460" alt="screen shot 2018-03-17 at 9 44 25 am" src="https://user-images.githubusercontent.com/2073148/37555585-8b376d12-29c8-11e8-827a-23e7f95176c4.png"> Still works on Compassus <img width="357" alt="screen shot 2018-03-17 at 9 39 21 am" src="https://user-images.githubusercontent.com/2073148/37555586-8b4bccee-29c8-11e8-85bd-eba140d75904.png">


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/512

###### #8308 - Hotfix for Promotion Preview

###### Changes

- I think that current_source/current_promotion is not being set correctly when we are in the preview mode. This is a hotfix to allow users to preview their promotions/sources. I will create a new ticket to set `current_source` and `current_promotion` correctly in preview.


###### Closes:
 https://github.com/combinaut/sparkle/issues/8306

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"12eefa58079465d9ef33e26ae0111c4299935b7f","commit_sha":"929433d7ead79d0f1f1831ed39393f81e0bed53a"}}

## Deployed to: www.scrippsalpha.org (Fri Mar 16 20:24:55 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"1cf32426414db870ce198f3ec5fa7d1379d1c64e","commit_sha":"1cf32426414db870ce198f3ec5fa7d1379d1c64e"}}

## Deployed to: www.scrippsalpha.org (Fri Mar 16 19:56:42 2018)

#### Closed PRS:

###### #8301 - Adds Conditional to render partial if it exists

###### Changes

- Add a conditional to only display this partial if it exists.


###### Closes:
 [Unreported]

###### #8300 - Fixes the Dropdown Overlay

###### Changes

- makes the z-index of the publishing actions have a higher z-index, to overlay that of the wysiwyg container.
- updates tooltips to use to tooltip z-index


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/407

###### #8298 - Fix microsite template for locations and refactor layouts

###### Changes
 Because we weren't `yield`ing the location template in microsite, we weren't getting any of the location-specific content. I've vastly simplifed the layouts so now locations also use the default layout and microsite is just the default layout with the navigation option turned off. No need for location specific tabbed_microsite anymore as you can just provide `content_for :main` if you don’t want the layout to render `components_html :main`.


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/375

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"8d9e3ec73cc5bfb39fb7c73d8a11dacf0623ba60","commit_sha":"1de8a90220f06981aa7b947f8caa51081a8e205a"}}

## Deployed to: www.scrippsalpha.org (Fri Mar 16 18:49:08 2018)

#### Closed PRS:

###### #8299 - Fixes for mobile javascript error

###### Changes

- adds in missing square bracket that causes the error issue on iOS ![simulator screen shot
- iphone 8
- 2018-03-16 at 13 58 30](https://user-images.githubusercontent.com/2073148/37533973-2fa596aa-2922-11e8-83ca-ec224e804d61.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/507, https://github.com/combinaut/sparkle-scripps/issues/508

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"25df88caf0e7f4a56ed7cad9ec39ba493f220afd","commit_sha":"f4fa0e5f2ed4a8ebaa0e791cedd6dc073cbed422"}}

## Deployed to: www.scrippsalpha.org (Fri Mar 16 18:27:43 2018)

#### Closed PRS:

###### #8299 - Fixes for mobile javascript error

###### Changes

- adds in missing square bracket that causes the error issue on iOS ![simulator screen shot
- iphone 8
- 2018-03-16 at 13 58 30](https://user-images.githubusercontent.com/2073148/37533973-2fa596aa-2922-11e8-83ca-ec224e804d61.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/507, https://github.com/combinaut/sparkle-scripps/issues/508

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"25df88caf0e7f4a56ed7cad9ec39ba493f220afd","commit_sha":"22c11c3b12b9ad96d31d0a42441573c9c9c18da3"}}

## Deployed to: www.scrippsalpha.org (Fri Mar 16 00:09:19 2018)

#### Closed PRS:

###### #8293 - Fixes Info appearing in Assessments

###### Changes

- In commit https://github.com/combinaut/sparkle/commit/603460722267d95f17292fe6aa556a102ee90eb6 we added a placeholder `info.html` but for `non_page_builder` resources, we do a check to see if the `info` partial_exists (which is now always true).
- This commit just removes the `info` placeholder. But maybe we should create a better check to decide when we show the edit settings.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/505

###### #8295 - Update instructions column to text

###### Changes

- updates instructions column from string to text on assessments table.
- we were getting errors the text was too long. Since this is a wysiwyg input, it makes sense that we allow text to be saved.


###### Closes:
 https://github.com/combinaut/sparkle/issues/8283, https://github.com/combinaut/sparkle/issues/8275

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"640429414ba785bac5021908d3376fdda70f25a7","commit_sha":"a8adc067b5a6e04de22f2196e5029f92ff0276d9"}}

## Deployed to: www.scrippsalpha.org (Thu Mar 15 23:51:50 2018)

#### Closed PRS:

###### #8289 - Updates Healthy Life Logo

###### Changes

- updates healthy lifes logo
- simplifies code for different devices


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/502

###### #8279 - Updates Healthy Life to Health & Wellness

###### Changes

- updates healthy life to Health & Wellness


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/494

###### #8263 - Add layouts to sources

###### Changes

- Allows customization of layouts for sources


###### Closes:
 combinaut/sparkle-compassus#368

###### #8285 - Adds Footer to Assessment

###### Changes

- Adds a footer column to the assessments table. Displays the footer on the Assessment Form. By default, if there is no footer, don’t display anything.
- Need to add functionality for `www`: if there is no footer, then use some default text (the same default text as forms).


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/500

###### #8288 - Fixes error where pages that don't have themes crash

###### Changes

- On Combinaut pages needed to have theme_name set in order to display. This makes themes optional


###### Closes:
 Hotfix

###### #8140 - combinaut hero banners with centered alignment

###### Changes

- Header and footer updates
- Mid-way hero banners with centered alignment
-


###### Closes:
 *Comma separated list of closed issue links*

###### #8267 - Fixes Stacking on Interstitial and Common Layouts

###### Changes

- sets the affiliated content in `default-layout` to be more specific per media type. The problem was the default-layout mixin was further specifying rules. Since we do not need these rules to apply in tablet/mobile, only apply them in `$full`
- set the height on the images surrounding element (`image-link`). This lets us define the height, and set the overflow to hidden. This way we can standardize the images without stretching them. It crops the image to ‘fill’ the space.
- sets the tablet view to have images span accross rather than stacked.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/482, https://github.com/combinaut/sparkle-scripps/issues/492

###### #8284 - Correctly detect inherited targeting.

###### Changes
 We need to expand the component data in order to correctly detect inherited targeting. This was a problem when a candidate was inheriting targeting from a source.


###### Closes:
 Part of https://github.com/combinaut/sparkle-scripps/issues/501

###### #8276 - automatically CC the main email address of a location.

###### Changes
 When a form is submitted on a location page, automatically CC the main email address for that location. **NOTE: Before deploying this, we need to send Rex the email address (no-reply@compassus.com) and the IP address of the server sending the email. He needs to whitelist this to avoid SPAM reports.**


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/359

###### #8274 - 371 compassus bring back cta

###### Changes

- Brings back teaser type CTA's on mobile
- Gives the user the choice of what mobile CTA display type they would like
- Only works on forms given a CTA attribute
- Only effects Compassus
- Allows for both methods to appear on the page at once. If the user does not set a style the CTA will default to the selected method for the client. ![artboard](https://user-images.githubusercontent.com/2073148/37370450-0cfbf9fc-26eb-11e8-8c29-143e89fffd23.png) ![screen shot 2018-03-13 at 6 22 43 pm](https://user-images.githubusercontent.com/2073148/37370625-92933ac6-26eb-11e8-867f-d474bb603d78.png)


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/371

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"ae1f681e889e0cdf181a562179c0c02df617dc38","commit_sha":"bf8b9491036b82fa230314913a1d504bc648ebd9"}}

## Deployed to: www.scrippsalpha.org (Thu Mar 15 21:46:38 2018)

#### Closed PRS:

###### #8289 - Updates Healthy Life Logo

###### Changes

- updates healthy lifes logo
- simplifies code for different devices


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/502

###### #8279 - Updates Healthy Life to Health & Wellness

###### Changes

- updates healthy life to Health & Wellness


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/494

###### #8263 - Add layouts to sources

###### Changes

- Allows customization of layouts for sources


###### Closes:
 combinaut/sparkle-compassus#368

###### #8285 - Adds Footer to Assessment

###### Changes

- Adds a footer column to the assessments table. Displays the footer on the Assessment Form. By default, if there is no footer, don’t display anything.
- Need to add functionality for `www`: if there is no footer, then use some default text (the same default text as forms).


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/500

###### #8288 - Fixes error where pages that don't have themes crash

###### Changes

- On Combinaut pages needed to have theme_name set in order to display. This makes themes optional


###### Closes:
 Hotfix

###### #8140 - combinaut hero banners with centered alignment

###### Changes

- Header and footer updates
- Mid-way hero banners with centered alignment
-


###### Closes:
 *Comma separated list of closed issue links*

###### #8267 - Fixes Stacking on Interstitial and Common Layouts

###### Changes

- sets the affiliated content in `default-layout` to be more specific per media type. The problem was the default-layout mixin was further specifying rules. Since we do not need these rules to apply in tablet/mobile, only apply them in `$full`
- set the height on the images surrounding element (`image-link`). This lets us define the height, and set the overflow to hidden. This way we can standardize the images without stretching them. It crops the image to ‘fill’ the space.
- sets the tablet view to have images span accross rather than stacked.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/482, https://github.com/combinaut/sparkle-scripps/issues/492

###### #8284 - Correctly detect inherited targeting.

###### Changes
 We need to expand the component data in order to correctly detect inherited targeting. This was a problem when a candidate was inheriting targeting from a source.


###### Closes:
 Part of https://github.com/combinaut/sparkle-scripps/issues/501

###### #8276 - automatically CC the main email address of a location.

###### Changes
 When a form is submitted on a location page, automatically CC the main email address for that location. **NOTE: Before deploying this, we need to send Rex the email address (no-reply@compassus.com) and the IP address of the server sending the email. He needs to whitelist this to avoid SPAM reports.**


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/359

###### #8274 - 371 compassus bring back cta

###### Changes

- Brings back teaser type CTA's on mobile
- Gives the user the choice of what mobile CTA display type they would like
- Only works on forms given a CTA attribute
- Only effects Compassus
- Allows for both methods to appear on the page at once. If the user does not set a style the CTA will default to the selected method for the client. ![artboard](https://user-images.githubusercontent.com/2073148/37370450-0cfbf9fc-26eb-11e8-8c29-143e89fffd23.png) ![screen shot 2018-03-13 at 6 22 43 pm](https://user-images.githubusercontent.com/2073148/37370625-92933ac6-26eb-11e8-867f-d474bb603d78.png)


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/371

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"ae1f681e889e0cdf181a562179c0c02df617dc38","commit_sha":"c0a1829bd57356fe6e353ccc79fb3e88528d0430"}}

## Deployed to: www.scrippsalpha.org (Thu Mar 15 20:18:28 2018)

#### Closed PRS:

###### #8263 - Add layouts to sources

###### Changes

- Allows customization of layouts for sources


###### Closes:
 combinaut/sparkle-compassus#368

###### #8285 - Adds Footer to Assessment

###### Changes

- Adds a footer column to the assessments table. Displays the footer on the Assessment Form. By default, if there is no footer, don’t display anything.
- Need to add functionality for `www`: if there is no footer, then use some default text (the same default text as forms).


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/500

###### #8288 - Fixes error where pages that don't have themes crash

###### Changes

- On Combinaut pages needed to have theme_name set in order to display. This makes themes optional


###### Closes:
 Hotfix

###### #8140 - combinaut hero banners with centered alignment

###### Changes

- Header and footer updates
- Mid-way hero banners with centered alignment
-


###### Closes:
 *Comma separated list of closed issue links*

###### #8267 - Fixes Stacking on Interstitial and Common Layouts

###### Changes

- sets the affiliated content in `default-layout` to be more specific per media type. The problem was the default-layout mixin was further specifying rules. Since we do not need these rules to apply in tablet/mobile, only apply them in `$full`
- set the height on the images surrounding element (`image-link`). This lets us define the height, and set the overflow to hidden. This way we can standardize the images without stretching them. It crops the image to ‘fill’ the space.
- sets the tablet view to have images span accross rather than stacked.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/482, https://github.com/combinaut/sparkle-scripps/issues/492

###### #8284 - Correctly detect inherited targeting.

###### Changes
 We need to expand the component data in order to correctly detect inherited targeting. This was a problem when a candidate was inheriting targeting from a source.


###### Closes:
 Part of https://github.com/combinaut/sparkle-scripps/issues/501

###### #8279 - Updates Healthy Life to Health & Wellness

###### Changes

- updates healthy life to Health & Wellness


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/494

###### #8276 - automatically CC the main email address of a location.

###### Changes
 When a form is submitted on a location page, automatically CC the main email address for that location. **NOTE: Before deploying this, we need to send Rex the email address (no-reply@compassus.com) and the IP address of the server sending the email. He needs to whitelist this to avoid SPAM reports.**


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/359

###### #8274 - 371 compassus bring back cta

###### Changes

- Brings back teaser type CTA's on mobile
- Gives the user the choice of what mobile CTA display type they would like
- Only works on forms given a CTA attribute
- Only effects Compassus
- Allows for both methods to appear on the page at once. If the user does not set a style the CTA will default to the selected method for the client. ![artboard](https://user-images.githubusercontent.com/2073148/37370450-0cfbf9fc-26eb-11e8-8c29-143e89fffd23.png) ![screen shot 2018-03-13 at 6 22 43 pm](https://user-images.githubusercontent.com/2073148/37370625-92933ac6-26eb-11e8-867f-d474bb603d78.png)


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/371

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"ae1f681e889e0cdf181a562179c0c02df617dc38","commit_sha":"fc11c2b4b5dc75ddb91d8832478159da709342ea"}}

## Deployed to: www.scrippsalpha.org (Tue Mar 13 22:38:46 2018)

#### Closed PRS:

###### #8271 - Adds Provider NPI data to salesforce

###### Changes

- adds receiving and referring provider npi data to salesforce.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/485

###### #8216 - 275 fix hero banners

###### Changes

- Beginning to standardize hero-banner html and scss.
- trying to make one base hero-banner that can be used by all clients.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/275, https://github.com/combinaut/sparkle-scripps/issues/475

###### #8266 - Conditional scroll freezing for CTA's

###### Changes

- If the CTA is smaller then the window then we use scroll freezing to keep the user's position centered on the cta.
- If the window is smaller then the CTA we use the fix that was developed to unlock scrolling on the body during this time
- Adds more options to the modal JS to let scripts take control of when freeze scrolling is applied https://drive.google.com/file/d/1UQ1y5UboQbs-G8Cy48J0To5-UUkB4TrA/view?usp=sharing


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/370

###### #8265 - Update to Ahoy 2.

###### Changes
 Upgrade to Ahoy 2. I opted to keep `Ahoy.server_side_visits = true` even though it is the default because we explicitly need this in place due to how experiments work. See https://github.com/combinaut/sparkle/commit/fabe7dbfd923ca4cde1f79a5010acaa17773c0a8#diff-72bd7dc18d99d3d6a4ec7a47c9d62887 for more detail.


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/365

###### #8268 - Sets up HTTP authentication for healthplan

###### Changes

- step one in making healthplan undiscoverable.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/491

###### #8264 - CTA fixes mobile

###### Changes

- The problem here is that modal will freeze scrolling when its open, this causes a problem on iOS and Android where the Browser wants to force a move of the frozen scrollable content, then the CSS / JS rules are making that stop. this conflict causes the issue.
- Added in a way to toggle when freeze scrolling JS is used. Then to make the web page only show as much as it needs to on mobile I have written functions that will set the total scrollable height to be a little greater than the CTA that needs to be shown
- As per @jbraem message from the client I've added a secondary button to the inline content appearing in the sidebar area
- Tested on iOS and Android simulators and the problem appears fixed on latest gen phones (iPhone X, Samsung S8, Pixel 2) and older devices (Galaxy S5 and the iPhone SE), ![simulator screen shot
- iphone 8
- 2018-03-12 at 15 42 30](https://user-images.githubusercontent.com/2073148/37303066-192b8740-260c-11e8-9c8b-3f390639e5b6.png) ![simulator screen shot
- ipad 5th generation
- 2018-03-12 at 15 42 02](https://user-images.githubusercontent.com/2073148/37303067-19535540-260c-11e8-92c7-0c36a162ec00.png) ![simulator screen shot
- ipad 5th generation
- 2018-03-12 at 15 41 53](https://user-images.githubusercontent.com/2073148/37303068-1965cafe-260c-11e8-9966-0795d0079547.png) ![simulator screen shot
- iphone 8
- 2018-03-12 at 15 36 05](https://user-images.githubusercontent.com/2073148/37303069-19771cdc-260c-11e8-9fc8-2dce5177a44f.png) ![simulator screen shot
- iphone se
- 2018-03-12 at 15 35 49](https://user-images.githubusercontent.com/2073148/37303070-198e4f60-260c-11e8-86b3-0073d7949f0d.png)


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/370

###### #8208 - 439 reorder primary nav

###### Changes

- reorders primary Nav based on request.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/439

###### #8261 - Removes Paragraph Spacing in Physician CTA

###### Changes

- Removes the paragraphy spacing in the physician cta.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/487

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"d4a6c1e20ae4538faf8325b419ca5984601e9010","commit_sha":"41b919dd7479d74be0db825c74afdfda22c81396"}}

## Deployed to: www.scrippsalpha.org (Fri Mar  9 16:54:20 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"abb636f96fe78cab759f2cb0a43f3cf1d5f1e5f5","commit_sha":"b3f4b3bb66922ca61ddd5f7cd49d4e444531eaba"}}

## Deployed to: www.scrippsalpha.org (Fri Mar  9 01:26:24 2018)

#### Closed PRS:

###### #8259 - Updates Tables to use charset utf-8

###### Changes

- allows users to save sparkle telephone numbers in assessment builder


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/457

###### #8260 - Hides the Assessment Start Over Button

###### Changes

- hides assessment start over button.
- left it in since we will be making changes to custom reidrects soon and we can re-assess whether we should rip this out completely or not.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/351

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"8a468833338f5ee3c278223e0739a528cd118002","commit_sha":"181f2a5d659fa39911a5d5e69094318a63ed48b9"}}

## Deployed to: www.scrippsalpha.org (Thu Mar  8 22:22:36 2018)

#### Closed PRS:

###### #8257 - Updates DF CTA

###### Changes

- Making DF CTA more “personable” as per request
- Note: These changes will not be reflected until Physician Import is run.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/426

###### #8258 - Fixes End Button On Assessments

###### Changes

- Removed the end button since we don't want it when redirecting and there are other ways to exit out of the default completion modal


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/464

###### #8253 - 403 soundcloud layout

###### Changes

- Layout fixes for soundcloud


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/403

###### #8248 - 356 microsite

###### Changes

- Adds the microsite template
- Fix the hero-banner styles.
- Allows hero-banners to be cropped.


###### Closes:
 https://github.com/combinaut/sparkle-compassus/issues/356, https://github.com/combinaut/sparkle-compassus/issues/360

###### #8254 - Adds location finder spec back in

###### Changes

- add location finder spec back in to confirm that it routes through location/index.


###### Closes:
 Related to https://github.com/combinaut/sparkle-scripps/issues/484

###### #8252 - Fixes Locations Finder 404

###### Changes

- Fixes 404 for `locations/find`


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/484

###### #8245 - Prevent page-caching of location browser query params

###### Changes

- Fix bug location browser could show query content when no query was performed


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/366

###### #8246 - Add Assessment Results viewer

###### Changes

- view assessment results
- export results
- view attached documents


###### Closes:
 combinaut/sparkle-scripps#465

###### #8240 - 467 IE assessment issue

###### Changes

- While Grid is supported in IE 11, it does so by using an older standard of the grid spec. This is one of the cases where IE 11 grid doesn't match modern browsers. This fix introduces fallback support for IE 11 in the form of the `@supports` rule that will check if grid is fully supported then remove the fallback.
- ![screen shot 2018-03-05 at 6 25 22 pm](https://user-images.githubusercontent.com/2073148/37003770-91661e18-20a4-11e8-9731-92a64db9cc24.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/467

###### #8243 - Updates to remove Physicians from Recommender

###### Changes

- Removes physicians from services


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/455

###### #8244 - Record score to salesforce

###### Changes

- Send assessment score to Salesforce


###### Closes:
 combinaut/sparkle-scripps#466

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"4214c3a75d01392722f98150050aa030ced0d8af","commit_sha":"e9b06d92b9affe49feae99d7f2a43525687fd8f0"}}

## Deployed to: www.scrippsalpha.org (Tue Mar  6 00:05:16 2018)

#### Closed PRS:

###### #8239 - 474 Tablet search appearance

###### Changes

- Tablet search now appears as it should after overriding and adding these rules
-
- ![screen shot 2018-03-05 at 3 46 23 pm](https://user-images.githubusercontent.com/2073148/36996499-614f2236-208d-11e8-8feb-cf3f19456e07.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/474

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"efb97b0fd46a05450701969c2b4ee3a8a3adaa5e","commit_sha":"92ff2c13b04d1a1a6cc6a91e8a428d8dae2faa43"}}

## Deployed to: www.scrippsalpha.org (Mon Mar  5 20:56:34 2018)

#### Closed PRS:

###### #8236 - Fixes Responsive Preview in Firefox

###### Changes

- fixes the firefox issue. I’m not sure why firefox felt this was cross-origin but it did not think that reloading the iframe was a valid action
- reorganizes file a bit to call methods down the file


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/470

###### #8238 - Fixes Forms not Saving

###### Changes

- We changed JSON responses to not include the root node.
- Update to remove the `form` which was the root-node.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/468

###### #8237 - Fix form builder loading

###### Changes

- We changed JSON responses to not include the root node.
- Update to remove the `form_templates` which was the root-node.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/468

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"d81fcc88a551531e7b5025c02ba03e648c1ccd59","commit_sha":"c2432bcc91f94c018de6ebd4932902344b328091"}}

## Deployed to: www.scrippsalpha.org (Sat Mar  3 14:25:45 2018)

#### Closed PRS:

###### #8176 - 411 icons missing in firefox

###### Changes

- we can control the color of the icons through sparklets.
- using sparklets allows us to remove the inline svg in the css which is not being compiled correctly in firefox or ie.
- creates a partial to handle the header sitewide_search (DRYS up the code between qualcomm/healthplan).


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/411

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"4417b11d1d6f317d5387e5b3d8c018e33655ddb9","commit_sha":"9b5027bf0ecd5147b22dc9ed6d11764472dc9954"}}

## Deployed to: www.scrippsalpha.org (Fri Mar  2 22:14:52 2018)

#### Closed PRS:

###### #8235 - Compassus attempts multiple reconnects to mysql

###### Changes

- Compassus now attempts multiple reconnects to mysql


###### Closes:
 Unreported

###### #8234 - Update Logo for Qualcomm

###### Changes

- update logo for qualcomm as per request: https://github.com/combinaut/sparkle-scripps/issues/425


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/425

###### #8231 - Multiple Preview windows on clicking links on a Preview page

###### Changes

- the iframe needs to have an element added to its head in order for links to bubble up to the parent scope when clicked on. This change stops the browser from loading the iframe twice in the init phase and then on subsequent refreshes, it will again listen to the iframe to detect finish load and reapply the changes to the iframe please see this video for it in action https://drive.google.com/file/d/1cU86Aggk4dPAHS-4iPyYr34-MBwYH31u/view?usp=sharing


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/463

###### #8232 - Fixes test

###### Changes

- Fixes Test


###### Closes:
 [Unreported]

###### #8233 - Primary Phone Number Snippet

###### Changes
 Allows users to insert a snippet which represents the primary phone number of the current resource. Can be used in Shared Components and make unnecessary overwrites for phone numbers. It works with call tracking with a couple of restrictions:
- call tracking has to be set in Settings
- the number will only appear available for call tracking if it appears elsewhere on the page


###### Closes:
 combinaut/sparkle-compassus#363

###### #8230 - 462 expand parent on index table

###### Changes

- Updates to so `nested_index?` also returns true (allowing for expansion) when requesting js.
- Fixes Expansion to show children on index table.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/462

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"3e74aa2d8f332b9b0e35647fd5da6824295c7cb2","commit_sha":"4a15f92ffc1f10ddef828585d2ea3c8b8ea99dd5"}}

## Deployed to: www.scrippsalpha.org (Thu Mar  1 21:37:41 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"c4c916fdd47a53d68c5b442993a24af0a9274014","commit_sha":"c4c916fdd47a53d68c5b442993a24af0a9274014"}}

## Deployed to: www.scrippsalpha.org (Thu Mar  1 19:41:45 2018)

#### Closed PRS:

###### #8225 - 8221 sparkle footer issues

###### Changes

- Fixes variable issue causing media queries not to work
- footer logo fixed
- year is now made programmatic
- logo in header is now linked to root
- more padding to text area ![sparkle test_ ipad](https://user-images.githubusercontent.com/2073148/36855018-e96ea4e0-1d48-11e8-8c30-f0ef03720157.png)


###### Closes:
 https://github.com/combinaut/sparkle/issues/8221

###### #8217 - 453 Responsive Preview broken on tablet and mobile

###### Changes

- mobile cta's will appear on the screen is resized to tablet viewport or under
- this behavior only happens on preview
- style fixes to tablet header ![screen shot 2018-02-28 at 10 40 23 am](https://user-images.githubusercontent.com/2073148/36793605-3493258e-1c74-11e8-940d-a672383adf6d.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/453

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"04a7dd47b8050507a6948096f9f33be6bcd34ad1","commit_sha":"8cf8ef5844f57c7df92ab125ed4dde3960888a15"}}

## Deployed to: www.scrippsalpha.org (Thu Mar  1 00:52:28 2018)

#### Closed PRS:

###### #8218 - 429 - Fixes Image Quality in Affiliated Content

###### Changes

- we can pass in the max_width. We do not want it to pre-process images for affiliated content or else they look grainy/pixelated in the ultra-wide format due to pagespeed.
- set the max-width to be 100% and let the image get calcuated correctly
- I set this height to be a bit too big in a previous commit and it was stretching the image.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/429

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"6d9cefb317cf1f90a97f94939bf96b40c244f025","commit_sha":"4261c52c841c1e4cdfdd548cba25c59f9d4be9b9"}}

## Deployed to: www.scrippsalpha.org (Wed Feb 28 01:37:10 2018)

#### Closed PRS:

###### #8215 - Adds max width into df

###### Changes

- df results/filter were not getting the new max-width for ultra-wide displays.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/441

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"7e7a89c25ff2693ff0c397c9fc5c42a521021195","commit_sha":"ef9ce90fd75b39e5671f91d2cdc01a2a43dead1c"}}

## Deployed to: www.scrippsalpha.org (Wed Feb 28 00:57:54 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"af4f9eb84319b1b82c1f28b971cc59134a47550a","commit_sha":"af4f9eb84319b1b82c1f28b971cc59134a47550a"}}

## Deployed to: www.scrippsalpha.org (Wed Feb 28 00:27:13 2018)

#### Closed PRS:

###### #8190 - All affiliated content should ‘fill’ its space

###### Changes

- we were only applying this to the bare layout, but we want the carousal images to be the correct aspect ratio on all layouts.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/423

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"ea981503e35559d59b25a8be71932e59255af79d","commit_sha":"74aaf27a7e98ff8570d9ee9cee75073c6dd9b0b5"}}

## Deployed to: www.scrippsalpha.org (Tue Feb 27 11:59:48 2018)

#### Closed PRS:

###### #8213 - Re-enable xml

###### Changes

- Re-enable XML responses


###### Closes:
 https://github.com/combinaut/sparkle/issues/8212

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"1b0f0581f32c4f29b812c42963723cb479ebfa05","commit_sha":"ab5d4c98f6331a97f9faeed560d4da41eadd8c1a"}}

## Deployed to: www.scrippsalpha.org (Tue Feb 27 01:49:45 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"ac6f08eb7ad8a53383add63f30c1ac8f9d4d7a3f","commit_sha":"ac6f08eb7ad8a53383add63f30c1ac8f9d4d7a3f"}}

## Deployed to: www.scrippsalpha.org (Tue Feb 27 01:26:54 2018)

#### Closed PRS:

###### #8204 - Ultrawide - Meta Nav divider

###### Changes

- removes divider as requested in


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/431, https://github.com/combinaut/sparkle-scripps/issues/436

###### #8205 - Adds a bit of a margin above/below tags

###### Changes

- spaces out the news items tags a bit better.


###### Closes:
 Fixes https://github.com/combinaut/sparkle-scripps/issues/434

###### #8206 - fixes display issue for mobile search

###### Changes

- Height needs to be not be set to 0. This was fine for how the layout was before but now when search is activated the search class must have no defined height attribute ![screen shot 2018-02-26 at 2 17 41 pm](https://user-images.githubusercontent.com/2073148/36687410-e64c9df8-1aff-11e8-9fd8-f6a500d6b8e8.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/437

###### #8207 - Extra HTML added in

###### Changes

- there was some extra html added in from commit https://github.com/combinaut/sparkle/commit/e788bd315c532a5db8e4eaa8ca09e402b5271639.
- note: I needed to clear my cache and reload the page to see the change


###### Closes:
 Fixes https://github.com/combinaut/sparkle-scripps/issues/445

###### #8203 - Don’t explode if assessment score not present

###### Changes

- Fixes bug where a page would error 500 if it contained an assessment score snippet, but the url didn't specify a score


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8201

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"7449f32d1eacf76f4fddbd80f289313f093557db","commit_sha":"85b4fa0a0ea3a5a99c1286188b23573188947beb"}}

## Deployed to: www.scrippsalpha.org (Sun Feb 25 18:51:10 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"5c2efa1fc436aee9fdcf9511e7626f5c03ba9727","commit_sha":"5c2efa1fc436aee9fdcf9511e7626f5c03ba9727"}}

## Deployed to: www.scrippsalpha.org (Sun Feb 25 18:17:19 2018)

#### Closed PRS:

###### #8202 - Ensure assessment completion pages exist in live db

###### Changes

- Ensure assessment completion pages exist in live db


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/446

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"44c2febb934963ee6fa2d3299770dd1b58031e60","commit_sha":"6bbb789f4638624894ac33dfc9d00a65a9e068ef"}}

## Deployed to: www.scrippsalpha.org (Sun Feb 25 01:58:10 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"8a529b13823d5fc80fd53189c24467d4e154e4e7","commit_sha":"8a529b13823d5fc80fd53189c24467d4e154e4e7"}}

## Deployed to: www.scrippsalpha.org (Sun Feb 25 01:35:17 2018)

#### Closed PRS:

###### #8198 - LB Fixes

###### Changes
 **Remove buggy and unnecessary workaround** This code was originally introduced in 4c508a0 and recently started causing https://github.com/combinaut/sparkle-compassus/issues/349. I can’t replicate the bug this was supposed to fix, so I am removing this code. **Fix invalid CSS Rule** I incorrectly converted this when switching to Bourbon 5.0.


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8069

###### #8199 - Remove unnecessary distinct.

###### Changes
 A location shouldn’t be assigned an amenity more than once. I checked the DB and there were no instances of this. @feldpost Please try this query to make sure it works: Should explode on new MySQL: ```sql SELECT DISTINCT `amenities`.`id` FROM `amenities` INNER JOIN `amenity_assignments` ON `amenities`.`id` = `amenity_assignments`.`amenity_id` WHERE `amenity_assignments`.`location_id` = 1 ORDER BY amenity_assignments.position ASC ``` Should work: ```sql SELECT `amenities`.`id` FROM `amenities` INNER JOIN `amenity_assignments` ON `amenities`.`id` = `amenity_assignments`.`amenity_id` WHERE `amenity_assignments`.`location_id` = 1 ORDER BY amenity_assignments.position ASC ```


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/390.

###### #8171 - Sparkle scripps 298 assessment branching

###### Changes

- Users can now add custom Assessment completion pages based on the user's score
- Users can now add an Assessment Score snippet to any wysiwyg text input which will show the visitor's assessment score when the page is used as an Assessment completion page


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/298

###### #8194 - 221 prod bullets

###### Changes
 Cherry picked from for production https://github.com/combinaut/sparkle/pull/8154


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/221

###### #8192 - Removes the Research Link in the Primary Nav

###### Changes

- this used to be hidden and I think in the refactoring, we lost the rule that hides the research link.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/440

###### #8182 - Move hero-banner specific css into hero-banner.scss

###### Changes

- Moves the hero-banner specific css into out of dhs.scss and into hero-banner.scss
- removes the ‘base’ hero-banner css from the giving site. We do not allow for videos to be uploaded, it does not use h2 (it uses h1s).
- replace the ‘base’ hero-banner’ css with the overrides that were in dhs.scss.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/421

###### #8191 - 432 enlarge search bar

###### Changes

- Makes healthy life search look exactly the same as the base search
- Little tweaks to search based on teams feedback (center text, give margin, make search fill the available space).


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/432, https://github.com/combinaut/sparkle-scripps/issues/433

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"b1ad145d2ed738aca10b74c11e960517db961bf5","commit_sha":"84aa5e13075d6859f549770a16e6c5ab0065b1d9"}}

## Deployed to: www.scrippsalpha.org (Fri Feb 23 23:00:28 2018)

#### Closed PRS:

###### #8192 - Removes the Research Link in the Primary Nav

###### Changes

- this used to be hidden and I think in the refactoring, we lost the rule that hides the research link.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/440

###### #8191 - 432 enlarge search bar

###### Changes

- Makes healthy life search look exactly the same as the base search
- Little tweaks to search based on teams feedback (center text, give margin, make search fill the available space).


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/432, https://github.com/combinaut/sparkle-scripps/issues/433

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"b1ad145d2ed738aca10b74c11e960517db961bf5","commit_sha":"8de6418925df12cbc9397c7690d2fe0ba77fad52"}}

## Deployed to: www.scrippsalpha.org (Fri Feb 23 18:37:34 2018)

#### Closed PRS:

###### #8180 - 418 scripps ultrawide design feedback

###### Changes

- [x] The ultrawide breakpoint should persist from 1400px to infinity. Currently its reverting back to the regular desktop layout when the viewport hits around 2000px.
- [x] Remove the negative letter spacing on the nav (ping me on Slack if this needs to be discussed)
- [x] The secondary header nav font size should be 14px, not 16 (also dividers).
- [x] The predictive search results panel has no background on alpha (see image).
- [x] I'm seeing a gap in the breadcrumb wave background when the viewport gets to around 2200px wide. (see image)
- [x] Can we increase the line weight of the chevrons so they match the [comps](http://zpl.io/aMLEjXJ)? I can provide a new svg if necessary.
- [x] In the regular desktop resolution the chevrons are sitting high vertically. (see image)
- [x] Let’s try updating the font size for the .primary-nav-featured links to 20px in the ulrawide breakpoint (not the expanded menu links or search box text).
- [x] Remove left margin from the "Find a doctor" link in primary nav so it aligns flush with the logo.
- [x] Add a divider between Contact Us & About.
- [x] Include the meta nav items in the mobile navigation. Specifically About & Contact – they should appear above "Health Professionals"
- [x] Add 1em right margin to the primary nav options in the ultra wide breakpoint.
- [x] Can we expand the width of the search bar to fill the space not used by the primary nav (flexbox?) ![screen shot 2018-02-22 at 6 09 10 pm](https://user-images.githubusercontent.com/2073148/36567015-83442cbe-17fb-11e8-8dda-47d0fb51ae8f.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/418

###### #8183 - Updates the font size on www footer

###### Changes

- have the font-sizes for links match (be 14px) in `www` footer.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/415

###### #8175 - 8122 review fixes

###### Changes

- Moves some logo rules in to at-root
- search box is a child of search and should be defined with in it
- Other rules that are in search.scss that are not under the search rule are still best declared under this file, as they define styles of objects directly related to this element. ie Autocomplete results
- changes locations of files to match up with @clouie87 no screenshots as this is mostly code org here.


###### Closes:
 fixes related to #8122

###### #8155 - 69 scripps tab block for service

###### Changes

- Fixes a spacing issue with future bar being disconnected from header
- Adds shorter titles as an option for advance services sections
- Service pages will now switch from using the normal long titles on tablets and higher, then use mobile titles on smaller devices ![screen shot 2018-02-20 at 1 14 12 pm](https://user-images.githubusercontent.com/2073148/36438617-d97b907a-1640-11e8-8a3e-bb8a191cea59.png) ![screen shot 2018-02-20 at 1 13 57 pm](https://user-images.githubusercontent.com/2073148/36438618-d98faa6a-1640-11e8-828c-f3ba64640def.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/69

###### #8181 - Fix strong params issue when updating table_view_configuration.

###### Changes
 Rails now complains if you call to_hash without permitting the params.


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8179.

###### #8185 - Fixes Missing Logo on Microsite.

###### Changes

- Makes the logo appear in the microsite layout.
- centers the image by using y position rather than pixel pushing.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/419

###### #8168 - Assessment: CSS updates for mobile preview

###### Changes

- Each input now appears on its own line on mobile ![screen shot 2018-02-21 at 10 25 29 pm](https://user-images.githubusercontent.com/2073148/36516839-2cdeb6b4-1756-11e8-8796-f697355e7dd0.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/343

###### #8177 - 420 scripps healthy life mobile

###### Changes

- Edits the healthylife layout so that it will include the mobile nav as suggested by @jbraem
- small changes to the styles so the header fits in ![screen shot 2018-02-22 at 5 29 37 pm](https://user-images.githubusercontent.com/2073148/36565405-c342f99e-17f6-11e8-8384-ec1078212c65.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/420

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"136626e3a667d9709809aad46bc6f5429495538f","commit_sha":"bcd8aa972e55017585ff8ec88bebb72a6745a5d1"}}

## Deployed to: www.scrippsalpha.org (Thu Feb 22 16:32:24 2018)

#### Closed PRS:

###### #8173 - Spacing around Page Title

###### Changes

- revises padding for around title
- @jbraem Are you good with the spacing for the sidebar? The sidebar is tide to where the content starts but I can play around with it a bit to position it differently ![screen shot 2018-02-22 at 11 20 04 am](https://user-images.githubusercontent.com/2073148/36546666-6029d5aa-17c2-11e8-8137-a034425bf025.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/416

###### #8169 - Site wide search background

###### Changes

- adds at root rule so that styles for this are at root level fixing the described issue ![screen shot 2018-02-21 at 10 31 08 pm](https://user-images.githubusercontent.com/2073148/36517085-4bcf5406-1757-11e8-8604-70ec32bde64c.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/412

###### #8170 - Carousel image width

###### Changes

- Width was set to `auto`, so it was just setting the images to their max size. In the case of whats currently on Alpha 196px wide. This change will force the images to be the size of its parent container, but its possible in this case the image will gain artifacts from being stretched. Images on scrippsalpha ![screen shot 2018-02-22 at 10 38 14 am](https://user-images.githubusercontent.com/2073148/36544386-bf076890-17bc-11e8-8ed5-2e21bb7c96bf.png) With this fix. Images are ~293px wide here ![screen shot 2018-02-22 at 10 40 34 am](https://user-images.githubusercontent.com/2073148/36544449-e7e8af44-17bc-11e8-9fc9-455869b30e5a.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/414

###### #8174 - Soundcloud

###### Changes

- Full Soundcloud Integration with new SoundCloud Component: You can embed:
- User profiles (great for podcasts)
- Playlists
- Tracks
- Fully configurable.


###### Closes:
 combinaut/sparkle-scripps#403

###### #8172 - Fix salesforce submission.

###### Changes
 We were passing the description the Inquiry class but we didn’t add it as an argument. Also, we want to add the description to the leads table not the inquiries table.


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8161.

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"8cdb966a283b2c41b9e726fc02e51ee920ecab66","commit_sha":"c17a2e1407140d6ced7bce2d4196cfadc2464b9c"}}

## Deployed to: www.scrippsalpha.org (Thu Feb 22 13:26:31 2018)

#### Closed PRS:

###### #8154 - 221 bullet spacing

###### Changes

- does a batch migration to update components to add a break before and after a ul. In commit #52746ec, we removed the spacing before/after bullets so that this feature worked as expected (did not add extra margins). Now if the user wants margins, then they have to press enter (allows them to choose if they want a break or not).
- does not add break if a `ul` is directly followed by another `ul` this is because in some instances, the team has used multiple uls to show a list, Example: https://sandbox.scrippsalpha.org/admin/services/767/edit?tab=page_builder In the “Types of peripheral artery disease” section, the first list is really a collection of 4 uls).


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/221

###### #8166 - 386 healthplan navigation groups

###### Changes

- enable global navigation for healthplan
- link Find a Provider to '/physicians/find'
- link Find a Facility to '/locations/find'


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/386

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"a6d19e68815608af34d304a0180769c5508b7085","commit_sha":"a2ab6fd05a35b66fa955c741a9f11a8c74189ca0"}}

## Deployed to: www.scrippsalpha.org (Wed Feb 21 21:31:13 2018)

#### Closed PRS:

###### #8122 -  26 scripps update resolution

###### Changes

- Updates pages to use new rules as outlined by @jbraem
- new breakpoint added at 1400px that triggers most of these new rules
- ![screen shot 2018-02-13 at 1 15 55 pm](https://user-images.githubusercontent.com/2073148/36163570-1ec19b88-10c0-11e8-9115-4154ca158cfc.png) ![screen shot 2018-02-13 at 1 16 56 pm](https://user-images.githubusercontent.com/2073148/36163598-31a36060-10c0-11e8-9f5f-7fa195e3f5fc.png) ![screen shot 2018-02-13 at 1 17 14 pm](https://user-images.githubusercontent.com/2073148/36163620-41fdf4c0-10c0-11e8-984e-38e3a28647d2.png) ![screen shot 2018-02-13 at 1 18 26 pm](https://user-images.githubusercontent.com/2073148/36163661-692f2096-10c0-11e8-96d9-2cb8d9bd822d.png) Changes are on-going please see comments for latest screenshots


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/26, https://github.com/combinaut/sparkle-scripps/issues/323

###### #8163 - Fix character counters not showing.

###### Changes
 Validators are now `ActiveRecord::Validations` instead of `ActiveModel::Validations`.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/410

###### #8160 - Fix 500 error on /locations.asp

###### Changes
 Also fixes bad rendering of the 404 page for /locations.asp because the current context was not being reset (so `current_resource` was not the error like it should have been).


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/7959

###### #8157 - Custom color for title underline

###### Changes

- Creates variable for the underline color that can be selected on titles
- This can be set by individual clients now. Green is the default but see Qualcomm sets it to yellow as that is what that site requires ![screen shot 2018-02-20 at 3 24 52 pm](https://user-images.githubusercontent.com/2073148/36444932-098c07ba-1653-11e8-8b9f-d4e853e26430.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/72

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"159f1bf181f080d8891ca7718498bc68ffc14f9f","commit_sha":"4191a44bdf50863047bfe2368dd2a398186d7734"}}

## Deployed to: www.scrippsalpha.org (Wed Feb 21 12:37:53 2018)

#### Closed PRS:

###### #8158 - Fix variant system not detecting promo landing page.

###### Changes
 Because we have multiple ways of constructing a valid pages#show url (/pages/thank-you vs /thank-you), the existing landing page condition (current_promotion.target == request.path) wasn’t returning true when the page was using one URL format (/thank-you), but the variant request was using the other URL format (/pages/thank-you).


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/408.

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"99b2c0b1ef53b2089260f77a947f0cc7dd0f874f","commit_sha":"d74899cb16ec5e73d803f046a3ebbd34af0c2129"}}

## Deployed to: www.scrippsalpha.org (Wed Feb 21 00:11:46 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"47e8e947624035fa7887dab9942dfccc17104de7","commit_sha":"b8ffa04d8138c7c5b2606b1d193dcc1a70ed8d15"}}

## Deployed to: www.scrippsalpha.org (Tue Feb 20 22:26:04 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"f160061432191bfeb3321438d041d046b8ee7fcf","commit_sha":"b134f6033840430f187ac327815ca826c8b751a6"}}

## Deployed to: www.scrippsalpha.org (Sat Feb 17 20:25:58 2018)

#### Closed PRS:

###### #8146 - Fix slow empty search in development mode

###### Changes

- Fix slow empty search in development mode


###### Closes:
 #8145

###### #8149 - Only consider commits when showing pending indicator.

###### Changes
 Before we were also considering commit entries that were autosyncable. This is confusing to the user.


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/354

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"15c4a5440f514c88bbe1a1131f16c3195e0955f8","commit_sha":"274a9732477badc665471c13e15c6f1a0e2e4098"}}

## Deployed to: www.scrippsalpha.org (Thu Feb 15 20:47:15 2018)

#### Closed PRS:

###### #8138 - 385 - Fixes undefined titles

###### Changes

- We want to define the output as nothing (“”) rahter than as just a variable. Otherwise it outputs undefined on the screen when we render.


###### Closes:
 Fixes https://github.com/combinaut/sparkle-scripps/issues/385

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"fbe0433c43feb1180d40e106b174316bab9c8c10","commit_sha":"33fb72cd6843d8daf2fb3f0de976e9b7c6cde4c9"}}

## Deployed to: www.scrippsalpha.org (Thu Feb 15 16:23:21 2018)

#### Closed PRS:

###### #8131 - Add layout selector to PageAlias form

###### Changes

- Added a layout selector to the PageAlias form
- Fix bug where intro section could be hidden under the wrong conditions


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/378

###### #8121 - 313 standardize hbs templates titles

###### Changes

- Updates the hbs titles to use the linkedTitle helper. Note: @feldpost was getting an error in combinaut where `Cannot read property 'length' of undefine`. Which probably means that this.title is undefined in some instances. I guess there will need to be another check. Or many I need to move this check into the `if(title)` condition.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/313

###### #8125 - Update Normalize.css

###### Changes
 This newer version of normalize is much more limited and focusses on making browsers behave consistently instead of reseting all elements. I specifically updated it because the older version of normalize was overriding the box-sizing of search inputs, making the label filter input overflow badly. @feldpost @njakobsen @brianbest I created this PR for discussion because we also rely on some of old normalize's reset behaviour. For example, we assumed that figures had no margin. As far as I know, there is no real way of easily finding all these differences that we were relying on. **PROS:** * Fixes https://github.com/combinaut/sparkle-scripps/issues/374. * If we plan to update eventually, now might be a good time. * Less weird CSS needed to fix overzealous normalization. **CONS:** * Sites might be affected in ways that are hard to detect in an automated way. Similar to the bourbon upgrade.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/374.

###### #8129 - 53 services a z list link

###### Changes

- Removes Looking for more? link found in tab lists of services.
- examples: link: https://www.scrippsalpha.org/services/featured, https://sandbox.scrippsalpha.org/services/cancer-care/services/featured


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/53

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"595036acdd4e59292e3d4eeab44071a9735b03f8","commit_sha":"e25df65af74f56635173912cb40f03dd2e0c9c9f"}}

## Deployed to: www.scrippsalpha.org (Wed Feb 14 22:30:54 2018)

#### Closed PRS:

###### #8127 - Don’t explode if bad date is passed.

###### Changes
 If an unparseable date is passed (e.g. `11/32/2017`), Chronic returned `nil` and `to_datetime` exploded. We now handle this case and also don’t pass that date on to Salesforce (which would explode as well).


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8119.

###### #8128 - Add a maxlength to zip codes.

###### Changes
 Zip codes should be no longer than 10 characters (for extended zip).


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/355.

###### #8116 - 321 - Stacks long fields in Experiment Modal

###### Changes

- stacks long fields in the Experiment Modal so that it does not over-extend beyond the modal.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/321

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"cd797d370c0ce144953d6c99c0ccfc399671547d","commit_sha":"ec90bd0c95cbb7774dee687659a5288f5d78ceae"}}

## Deployed to: www.scrippsalpha.org (Wed Feb 14 22:01:46 2018)

#### Closed PRS:

###### #8127 - Don’t explode if bad date is passed.

###### Changes
 If an unparseable date is passed (e.g. `11/32/2017`), Chronic returned `nil` and `to_datetime` exploded. We now handle this case and also don’t pass that date on to Salesforce (which would explode as well).


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8119.

###### #8128 - Add a maxlength to zip codes.

###### Changes
 Zip codes should be no longer than 10 characters (for extended zip).


###### Closes:
 Closes https://github.com/combinaut/sparkle-compassus/issues/355.

###### #8116 - 321 - Stacks long fields in Experiment Modal

###### Changes

- stacks long fields in the Experiment Modal so that it does not over-extend beyond the modal.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/321

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"cd797d370c0ce144953d6c99c0ccfc399671547d","commit_sha":"832df8a97c5379627bf2eb69007caf39b6fda4f1"}}

## Deployed to: www.scrippsalpha.org (Wed Feb 14 19:56:49 2018)

#### Closed PRS:

###### #8124 - Fix Save after Preview in PB

###### Changes
 In Rails 5, submit buttons are [automatically given a disable-with](https://stackoverflow.com/a/44025628). This submit button is actually meant to be pressed multiple times (used for PB preview and saving), so we need to explicitly turn that off. Also, removed a dead version of normalize and the including of normalize in `page_builder.scss` (it's already in `admin.scss`).


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/333

###### #8126 - Fix order clause not appearing in select.

###### Changes
 Newer versions of MySQL throw an error in this case. Also do sorting in SQL and use Enumerable.grep instead of select.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/377

###### #8123 - Fix can’t switch type of page attached to resource.

###### Changes
 We don’t use ids by default, so we aren’t able to find the page because the URL does not include the whole scope. I’ve forced the URL to use ids until we switch to them by default.


###### Closes:
 Closes https://github.com/combinaut/sparkle-scripps/issues/371

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"2b92373dd8c7e1634c19c020aba8cebc2f02b02f","commit_sha":"4a0efb05f76e6fdce26f6bb751dc8596d12d90d9"}}

## Deployed to: www.scrippsalpha.org (Mon Feb 12 22:51:15 2018)

#### Closed PRS:

###### #8062 - Fixes handlebars template.

###### Changes

- passes in title_size with a default value of `h3`.
- cleans up the template code.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/313

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"c5a57c9bb46f3aead09ae0342c2e9f182a29aec6","commit_sha":"1d3b34db27a07d91f95b65de1ab67a4701fd91af"}}

## Deployed to: www.scrippsalpha.org (Mon Feb 12 22:11:46 2018)

#### Closed PRS:

###### #8117 - Removes margin on bottom of header

###### Changes

- removes the margin at the bottom on the header text in the hero banner


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/330

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"e4950f8bb3458fa8b43ebda6e80ffa2c71870a1b","commit_sha":"b7435ece23e10001813b41cee12bfc6d1ffb0fc3"}}

## Deployed to: www.scrippsalpha.org (Mon Feb 12 20:50:41 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"df55c2abfadfe667cd00ecda7a80eb8c91ebcd87","commit_sha":"df55c2abfadfe667cd00ecda7a80eb8c91ebcd87"}}

## Deployed to: www.scrippsalpha.org (Mon Feb 12 19:48:21 2018)

#### Closed PRS:

###### #8114 - Remove Find a Doctor/Find a Facility on healthplan

###### Changes

- removes these top level links from healthplan in both desktop/mobile view.


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/368

###### #8115 - Reorganize cap tasks and add memcache clearing.

###### Changes
 We weren’t clearing memcached when we deployed which would lead to weird bugs with cached data being out of sync with what other pieces of code were expecting.


###### Closes:
 Reported as Location Browser not working

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"d20c489faa4aba65589391e8d03306dbdc9d7abd","commit_sha":"2f1975f8d8d8d3f6db7e990cdc1e4a1f668dbc13"}}

## Deployed to: www.scrippsalpha.org (Mon Feb 12 18:30:44 2018)

#### Closed PRS:

###### #8113 - Fix responsive preview.

###### Changes
 We need to permit the parameters or else they will no longer merge in Rails 5.1.


###### Closes:
 Closes https://github.com/combinaut/sparkle/issues/8110

###### #8112 - 367 scripps text dropdown cut off

###### Changes

- EM() function is removed in bourbon 5.0. This converts em calcs back to their pixel results
- I'm going to set everything in admin to their em values as they have a known font-size base the ones in location browser i'm setting to the relevant px size as those base units can be harder find because the clients change that
- ![screen shot 2018-02-12 at 12 17 04 pm](https://user-images.githubusercontent.com/2073148/36106943-06799bb0-0fef-11e8-99c4-f3a3286dc4ae.png) ![screen shot 2018-02-12 at 12 16 53 pm](https://user-images.githubusercontent.com/2073148/36106953-0e5b60de-0fef-11e8-836b-1f6f08cf3552.png) ![screen shot 2018-02-12 at 12 20 27 pm](https://user-images.githubusercontent.com/2073148/36106984-23d41ab4-0fef-11e8-9932-d7125ddc5a9b.png)


###### Closes:
 https://github.com/combinaut/sparkle-scripps/issues/332, https://github.com/combinaut/sparkle-scripps/issues/367, https://github.com/combinaut/sparkle-scripps/issues/366

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"c9c2279c5f625e6019c499a4fe19d37863eeb8fc","commit_sha":"8b6a95e7f8c471d2d2b2dd3644006e00d31bf05c"}}

## Deployed to: www.scrippsalpha.org (Mon Feb 12 00:48:54 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"13553c946a9b2cf91f856575419d840d287bde90","commit_sha":"1185e2cfec41505288ad1ab040acd8104ad5631b"}}

## Deployed to: www.scrippsalpha.org (Sun Feb 11 05:12:31 2018)

#### Closed PRS:

###### #8091 - WIP 6 combinaut hero template

###### Changes

- Can now select background color from list
- can upload background or foreground photos
- the foreground will only display SVG's right now
- SVG's are placed right into the dom from backend via ajax. This is so @jbraem and I can make those animations. ![screen shot 2018-02-07 at 5 01 02 pm](https://user-images.githubusercontent.com/2073148/35941458-a9856dcc-0c28-11e8-8f7a-e376c40c674c.png) ![screen shot 2018-02-07 at 5 01 41 pm](https://user-images.githubusercontent.com/2073148/35941464-adac844e-0c28-11e8-99e2-04eb6cb00067.png) ![screen shot 2018-02-07 at 5 01 24 pm](https://user-images.githubusercontent.com/2073148/35941465-adbbe650-0c28-11e8-835e-9e7b3f88ddf3.png)


###### Closes:
 https://github.com/combinaut/sparkle-combinaut/issues/6

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"a22e6f472be6e9a4c77c6d00dafd16fecd7c4f3c","commit_sha":"ddbf1e10534cdbfbdd84f1ff9840e4e3af68a202"}}

## Deployed to: www.scrippsalpha.org (Sat Feb 10 02:09:51 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"67bf55e73b24117bd92b18b7269d8a15ef50089f","commit_sha":"33cbc0b9cba177b3bd3d0d12ecd16089096a02fc"}}

## Deployed to: www.scrippsalpha.org (Fri Feb  9 20:14:41 2018)

No Closed PRS

[meta_data]: {"www.scrippsalpha.org":{"old_sha":"25a30c10526f31de2c9553cec1957fe2f145cec4","commit_sha":"fff0718938d5e3c27107c8ebc7124659e312e299"}}
