Software Engineering - CMP020N204S

Getting Started
 to build the docker enter the following code 
 
 docker build -t cw1 .
 this gives it the tag 'cw1'

 you can use the following command after installing Docker Desktop:

 docker run -d -p 3250:3250 cw1
 this binds the dockers port 3250 to the local pcs port 3250 
 
 it has been set to 3250 in the index.js file where it states 'const port = 3250;'

 Once it has started, you can open your browser to  http://localhost.
