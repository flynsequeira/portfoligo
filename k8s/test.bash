# kubectl get context - find current context
# kubectl config get-contexts - list all contexts
# kubectl config use-context docker-desktop
# kubectl config use-context minikube


kubectl run comm-service-t1 --image=portfoligo-comm-service:latest --image-pull-policy=Never


# minikube remove service
kubectl delete service comm-service
kubectl delete pod comm-service

docker build -t portfoligo-comm-service:latest .
docker build -t portfoligo-react-app:latest .
