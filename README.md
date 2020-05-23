Commands:

gcloud config set project snappy-catcher-278117

gsutil rsync -r gs://60s ./60s-app

cd 60s-app

gcloud app deploy