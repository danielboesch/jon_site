SELECT * FROM product_cart pc 
JOIN products p ON pc.product_id = p.product_id
WHERE pc.cart_id = $1
ORDER BY pc.product_id;