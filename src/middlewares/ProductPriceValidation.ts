import { Request, Response, NextFunction } from 'express';

const ProductPriceValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.body.price) {
    return res.status(400).json({ message: '"price" is required' });
  }
  if (typeof req.body.price !== 'string') {
    return res.status(422).json({ message: '"price" must be a string' });
  }
  if (req.body.price.length <= 2) {
    return res
      .status(422)
      .json({ message: '"price" length must be at least 3 characters long' });
  }

  next();
};

export default ProductPriceValidation;
