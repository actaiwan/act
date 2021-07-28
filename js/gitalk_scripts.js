// Initialization
const gt_1_1 = new Gitalk({
  clientID: '7f70459a0d8e387c0d4b',
  clientSecret: '7909f208f02050a7aa947360096d7e31563b0b4f',
  repo: 'repo_for_comments',      // The repository of store comments,
  owner: 'actaiwan',
  admin: ['actaiwan'],
  number: 1,			  // Issue number
  id: location.href,      // Ensure uniqueness and length less than 50
  distractionFreeMode: false  // Facebook-like distraction free mode
});



// Rendering
gt_1_1.render('gt-container-1-1');
