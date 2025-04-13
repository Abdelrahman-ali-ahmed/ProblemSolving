var intToRoman = function(num) {
    const str = num.toString().padStart(4, "0")
    const M=parseInt(str.toString().length<=4?str.toString().split("")[0]:"not work")
    const D=parseInt(str.toString().length<=4?str.toString().split("")[1]:"not work")
    const L=parseInt(str.toString().length<=4?str.toString().split("")[2]:"not work")
    const X=parseInt(str.toString().length<=4?str.toString().split("")[3]:"not work")
    const MS="M".repeat(M)
    const DS=D!==0?D==9?"CM":D==4?"CD":D>=5?"D"+"C".repeat(D%5):"C".repeat(D):""
    const LS=L!==0?L==9?"XC":L==4?"XL":L>=5?"L"+"X".repeat(L%5):"X".repeat(L):"";
    const XS=X!==0?X==9?"IX":X==4?"IV":X>=5?"V"+"I".repeat(X%5):"I".repeat(X):"";
 return(MS+DS+LS+XS)
};