import { Request, Response, NextFunction } from 'express';

const ProductNameValidation = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.body.name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (typeof req.body.name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  if (req.body.name.length <= 2) {
    return res
      .status(422)
      .json({ message: '"name" length must be at least 3 characters long' });
  }

  next();
};

export default ProductNameValidation;
