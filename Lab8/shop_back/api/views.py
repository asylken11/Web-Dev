# api/views.py
from django.http import JsonResponse
from .models import Product, Category

def product_list(request):
    products = Product.objects.all()
    json_data = [category.to_json() for category in products]
    return JsonResponse(json_data, safe=False)

def product_detail(request, id):
    try:
        product = Product.objects.get(id=id)
        data = {'product': {
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'count': product.count,
            'is_active': product.is_active,
            'category': product.category.name
        }}
        return JsonResponse(data)
    except Product.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

def category_list(request):
    categories = Category.objects.all()
    data = {'categories': list(categories.values())}
    return JsonResponse(data)

def category_detail(request, id):
    try:
        category = Category.objects.get(id=id)
        data = {'category': {
            'name': category.name,
        }}
        return JsonResponse(data)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)

def category_product_list(request, id):
    try:
        category = Category.objects.get(id=id)
        products = category.product_set.all()
        data = {'products': list(products.values())}
        return JsonResponse(data)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category not found'}, status=404)
