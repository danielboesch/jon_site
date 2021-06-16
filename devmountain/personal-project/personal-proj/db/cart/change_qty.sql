UPDATE product_cart
SET quantity = $3
WHERE cart_id = $1 AND product_id = $2;

SELECT * FROM product_cart pc
JOIN products p ON pc.product_id = p.product_id
WHERE pc.cart_id = $1
ORDER BY pc.product_id;