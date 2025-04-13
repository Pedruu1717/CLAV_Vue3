CLAV project programmed in Vue 3 based on the official project made with Vue 2: https://qldclav.dglab.gov.pt/ \
\
CLAV is the case study for the dissertation "From Vue2.0 to Vue3.0: application migration" that aims to explain the transformations necessary to apply in order to migrate an application from Vue 2 to Vue 3.

To run the app:
  - Go to folder /CLAV
  - Build image: docker build -t clav-interface .
  - Create and run container: docker run -p 8082:4173 clav-interface
  - Go to localhost:8082 on the browser

**Note**: Official credentials (login with email and password) are needed to get access to the platform's content.
