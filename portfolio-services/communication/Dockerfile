# Start from the official Golang image
FROM golang:1.22-alpine

# Set the Current Working Directory inside the container
WORKDIR /

# Copy the go mod and sum files
COPY go.mod go.sum ./

# Download all dependencies. Dependencies will be cached if the go.mod and go.sum files are not changed
RUN go mod download

# Copy the source from the current directory to the Working Directory inside the container
COPY . .

# Build the Go app
RUN go build -o main .

# Expose port 3001 to the outside world
EXPOSE 3001

# Command to run the executable
CMD ["./main"]
