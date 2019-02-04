# build single JS bundle
yarn build

# copy js bundle to GCP bucket
gsutil rsync -R build/ gs://ipargolfacademy/build
gsutil cp app.yaml gs://ipargolfacademy

# deploy ops-place project
gcloud app --project ipargolfacademy deploy
