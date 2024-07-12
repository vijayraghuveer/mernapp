import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import thumbnail from '../images/blog20.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail_container">
        <div className="post-detail_header">
          <PostAuthor/>
          <div className="post-detail_buttons">
            <Link to={'/posts/lskfl/edit'} className='btn sm primary' >Edit</Link>
            <Link to={'/posts/lskfl/delete'} className='btn sm danger' >Delete</Link>
          </div>      
        </div>
        <h1>This is the post title </h1>
        <div className="post-detail_thumbnail">
          <img src={thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente alias praesentium, unde soluta eius, consequuntur expedita totam ex, delectus id quia. Dolor quia quo perspiciatis. Repellendus voluptate blanditiis et animi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatibus alias porro dicta illum molestias veniam error et qui id, eum est amet repellendus, deserunt fugit facilis nisi nesciunt? Quos officia distinctio vitae natus ut repudiandae laboriosam maiores doloribus, maxime excepturi explicabo aut numquam ea aperiam iure. Ipsa velit sit asperiores quasi officiis magni nulla cupiditate fuga iure, vel ullam laborum non, ratione assumenda sapiente voluptatem provident amet maxime quaerat omnis, modi nam minus! Deserunt doloribus recusandae iure rerum autem, nam quo amet praesentium at. Repudiandae repellat quidem ipsum! Totam mollitia numquam suscipit iusto nesciunt veniam voluptates in error natus quisquam, saepe sint accusantium velit eos laboriosam autem ipsa reiciendis soluta unde.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque aspernatur excepturi veritatis ipsam, minus quia laudantium dolorum cumque molestias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum consequuntur illo recusandae placeat quibusdam a praesentium doloremque fugit! Impedit odit illo aspernatur repellendus veritatis numquam, porro culpa sint quo quis nisi laborum minus tempore deserunt beatae iste non sunt repudiandae dolores ullam magni. Officia, natus? Nihil voluptatem non animi natus odio quas magnam corrupti, excepturi eveniet repudiandae saepe provident beatae harum numquam voluptatum minus at! Architecto numquam vitae obcaecati labore! Quia dolorum eveniet molestiae velit aperiam ea? Voluptate facere at corporis itaque veritatis sequi quam, sunt sed laudantium facilis et illo animi necessitatibus dolores perferendis repellat. Ea ipsa veritatis eveniet repudiandae minima, similique ratione eaque illo pariatur tempora totam laboriosam saepe fugiat animi beatae quod eos id hic eum? Accusamus qui dolores cumque reprehenderit corrupti totam maxime facere necessitatibus voluptatibus blanditiis exercitationem id commodi dolore quidem dolorum perspiciatis ab unde repudiandae, assumenda ipsum in ea molestias quibusdam eum. Laborum molestiae aliquid doloremque odit rem obcaecati labore libero dolore eius, aperiam similique maxime accusamus cum magnam natus, cumque repudiandae suscipit, officia quaerat minima expedita consectetur dignissimos animi. Enim et ipsa sit accusamus similique molestias minus distinctio totam optio delectus. Aliquid harum aperiam officiis veniam sunt molestiae? Aliquid facere vitae natus quod.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita officia at, omnis fuga obcaecati vero labore. Eum aut aliquam, officia amet maxime fuga! Sunt, libero?
        </p>
      </div>
    </section>
  )
}

export default PostDetail