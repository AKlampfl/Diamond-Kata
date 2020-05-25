const { showDiamond } = require('./diamond.js') 

     describe('show Diamond', () => {
          
          it('show Diamond A', () => {
               expect(showDiamond("A")).toBe("A\n")
          })

          it('show Diamond B', () => {
               expect(showDiamond("B")).toBe(
               "-A-\n" +
               "B-B\n" +
               "-A-\n")
          })

          it('show Diamond C', () => {
               expect(showDiamond("C")).toBe(
               "--A--\n" +
               "-B-B-\n" +
               "C---C\n" +
               "-B-B-\n" +
               "--A--\n")
          })
     })

 





