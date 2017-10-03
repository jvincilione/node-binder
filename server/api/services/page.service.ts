import { connection } from '../../database/connection';
import { Page } from '../interfaces/page.interface';

class PageService {
  getPages(callback:any) :void {
    connection.query('SELECT * FROM `nb_pages`', callback);
  }

  getPage(slug, callback:any) :void {
    connection.execute('SELECT * FROM `nb_pages` WHERE `page_slug` = ?;', [slug], callback);
  }

  createPage(page:Page, callback:any) :void {
    connection.execute('INSERT INTO `nb_pages` ' +
                          '(`page_title`, ' +
                            '`page_slug`, ' +
                            '`page_content`, ' +
                            '`page_created_date`, ' +
                            '`page_author`, ' +
                            '`page_parent`) ' +
                        'VALUES (?, ?, ?, ?, ?, ?);',
                        [
                          page.title,
                          page.slug,
                          page.content,
                          page.createdDate,
                          page.author,
                          page.parent
                        ],
                        callback);
  }

  updatePage(page:Page, callback:any) :void {
    connection.execute('UPDATE `nb_pages` ' +
                          'SET `page_title` = ?, ' +
                          'SET `page_slug` = ?, ' +
                          'SET `page_content` = ?, ' +
                          'SET `page_created_date` = ?, ' +
                          'SET `page_author` = ?, ' +
                          'SET `page_parent` = ?, ' +
                        'WHERE id = ?;',
                        [
                          page.title,
                          page.slug,
                          page.content,
                          page.createdDate,
                          page.author,
                          page.parent,
                          page.id
                        ],
                        callback);
  }
}

export { PageService };
