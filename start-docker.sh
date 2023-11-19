started_at=$(date +"%s")

docker build --build-arg SERVER_PORT=5500 -t onl-js-pd2023-1-docker:v.2.0 .

docker run -it onl-js-pd2023-1-docker:v.2.0

ended_at=$(date +"%s")

minutes=$(((ended_at - started_at) / 60))
seconds=$(((ended_at - started_at) % 60))

echo "-----> Done for ${minutes}m ${seconds}s"