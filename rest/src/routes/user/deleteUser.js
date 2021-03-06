import User from '../../models/User'
import NotFound from '../../utils/Errors/NotFound'
import BadRequest from '../../utils/Errors/BadRequest'
 
export default async (req,res,next) => {
  try {
    const {id} = req.params
    // HTTP/1.1 400 Bad Request
    if(!id) throw new BadRequest("Unable to extract user id")
 
    const user = await User.findByIdAndRemove(id)
    // HTTP/1.1 404 Not Found
    if(!user) throw new NotFound("User not Found")
 
    // an HTTP status code of 204 is returned, indicating that the request was successful, however, no data is returned 
    res.json({status: 204, success:true})
  } catch( e ){
    return next( e )
  }
}