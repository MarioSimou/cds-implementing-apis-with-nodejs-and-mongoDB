import User from '../../models/User'

export default async (req,res,next) => {
  try {
    const { username } = req.params
    const user = await User.findOneAndRemove({ username })
    
    res.status(200).json({status: 200, data: user })
  } catch( e ){
    return next( e )
  }
}