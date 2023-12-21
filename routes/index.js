const express= require('express');
const router = express.Router();
const controller = require('../controller/Cmain')
const bookController = require('./../controller/Cbook');
const cookieParser = require('cookie-parser');

router.use(cookieParser());

// 임시 링크
router.get('/', controller.main);

// 로그인 페이지
router.get('/login', controller.signin);

router.get('/logout', controller.logout);

// 회원가입 페이지
router.get('/signup', controller.signup);
router.get('/search', controller.search);
router.get('/searchDetail', controller.searchDetail);


// 마이페이지
router.get('/mypage', controller.mypage);
router.post('/upload',controller.upload_post);
router.post('/login_post', controller.login_post)
router.post('/nameCheck_post', controller.nameCheck)
router.post('/idCheck_post', controller.idCheck)


// 회원가입하기
router.post('/signup_post', controller.signup_post);

// 메인 페이지
router.get('/main',bookController.main);

// 검색 결과 가져오기
router.get('/search',bookController.get_books);

// 베스트 셀러 가져오기
router.get('/bestSeller',bookController.get_bestSeller);

// 추천 신간 가져오기
router.get('/brendNew',bookController.get_brendNew);

// 책 클릭 시 상세페이지로 이동할 때 필요한 isbn13 가져오기
router.get('/getIsbn',bookController.get_isbn);

// 상세 페이지
router.get('/detailGo',bookController.go_detail);

// 상세페이지 내용 가져오기
router.get('/getDetail',bookController.get_detail);

// 상세페이지 댓글 가져오기
router.post('/getComments',bookController.get_comments);

// 상세 페이지 댓글 작성
router.post('/writeComment',bookController.post_comment)

// 상세 페이지 댓글 수정
router.patch('/updateComment',bookController.patch_comment);

// 상세페이지 댓글 삭제
router.delete('/deleteComment',bookController.delete_comment);

module.exports = router;